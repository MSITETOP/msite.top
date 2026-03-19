(function () {
  'use strict';

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function parseInline(text) {
    var escaped = escapeHtml(text || '');

    escaped = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
    escaped = escaped.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    escaped = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    escaped = escaped.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    escaped = escaped.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    escaped = escaped.replace(/_([^_]+)_/g, '<em>$1</em>');

    return escaped;
  }

  function renderMarkdown(markdown) {
    var src = String(markdown || '').replace(/\r\n?/g, '\n');
    var lines = src.split('\n');
    var html = [];
    var inUl = false;
    var inOl = false;
    var inCode = false;
    var codeLang = '';
    var paragraph = [];

    function closeParagraph() {
      if (!paragraph.length) return;
      html.push('<p>' + parseInline(paragraph.join(' ')) + '</p>');
      paragraph = [];
    }

    function closeLists() {
      if (inUl) {
        html.push('</ul>');
        inUl = false;
      }
      if (inOl) {
        html.push('</ol>');
        inOl = false;
      }
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var trimmed = line.trim();

      if (trimmed.indexOf('```') === 0) {
        closeParagraph();
        closeLists();

        if (!inCode) {
          inCode = true;
          codeLang = trimmed.slice(3).trim();
          html.push('<pre><code' + (codeLang ? ' class="language-' + escapeHtml(codeLang) + '"' : '') + '>');
        } else {
          html.push('</code></pre>');
          inCode = false;
          codeLang = '';
        }
        continue;
      }

      if (inCode) {
        html.push(escapeHtml(line) + '\n');
        continue;
      }

      if (!trimmed) {
        closeParagraph();
        closeLists();
        continue;
      }

      var headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        closeParagraph();
        closeLists();
        var level = headingMatch[1].length;
        html.push('<h' + level + '>' + parseInline(headingMatch[2]) + '</h' + level + '>');
        continue;
      }

      var ulMatch = trimmed.match(/^[-*]\s+(.+)$/);
      if (ulMatch) {
        closeParagraph();
        if (inOl) {
          html.push('</ol>');
          inOl = false;
        }
        if (!inUl) {
          html.push('<ul>');
          inUl = true;
        }
        html.push('<li>' + parseInline(ulMatch[1]) + '</li>');
        continue;
      }

      var olMatch = trimmed.match(/^\d+\.\s+(.+)$/);
      if (olMatch) {
        closeParagraph();
        if (inUl) {
          html.push('</ul>');
          inUl = false;
        }
        if (!inOl) {
          html.push('<ol>');
          inOl = true;
        }
        html.push('<li>' + parseInline(olMatch[1]) + '</li>');
        continue;
      }

      closeLists();
      paragraph.push(trimmed);
    }

    closeParagraph();
    closeLists();

    if (inCode) {
      html.push('</code></pre>');
    }

    return html.join('');
  }

  function updateMarkdownBlock(block) {
    if (!block) return;

    var source = block.querySelector('.article-markdown__source');
    var content = block.querySelector('.article-markdown__content');
    if (!source || !content) return;

    var markdownText = source.textContent || '';
    content.innerHTML = renderMarkdown(markdownText);
  }

  function processRoot(root) {
    if (!root || !root.querySelectorAll) return;
    var blocks = root.querySelectorAll('.article-markdown');
    for (var i = 0; i < blocks.length; i++) updateMarkdownBlock(blocks[i]);
  }

  function init() {
    processRoot(document);

    var observer = new MutationObserver(function (mutations) {
      for (var m = 0; m < mutations.length; m++) {
        var mutation = mutations[m];
        var target = mutation.target;

        if (target && target.nodeType === 1 && target.classList.contains('article-markdown__source')) {
          updateMarkdownBlock(target.closest('.article-markdown'));
        }

        var added = mutation.addedNodes || [];
        for (var j = 0; j < added.length; j++) {
          var node = added[j];
          if (!(node instanceof Element)) continue;

          if (node.matches && node.matches('.article-markdown')) {
            updateMarkdownBlock(node);
          } else {
            processRoot(node);
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
