(function () {
  'use strict';

  function getLineCount(codeEl) {
    if (!codeEl) return 1;

    var html = codeEl.innerHTML || '';
    var text = codeEl.textContent || '';

    var brCount = (html.match(/<br\s*\/?>/gi) || []).length;
    var newlineCount = (text.match(/\r\n|\r|\n/g) || []).length;

    return Math.max(1, brCount + 1, newlineCount + 1);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    // Fallback: legacy clipboard via temporary textarea
    return new Promise(function (resolve) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', 'true');
        ta.style.position = 'fixed';
        ta.style.top = '-1000px';
        ta.style.left = '-1000px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        resolve();
      } catch (e) {
        resolve();
      }
    });
  }

  function setCopiedState(copyBtn, enabled) {
    copyBtn.dataset.copied = enabled ? '1' : '';
    if (enabled) {
      copyBtn.setAttribute('aria-label', 'Copied');

      if (copyBtn._copiedTimer) window.clearTimeout(copyBtn._copiedTimer);
      copyBtn._copiedTimer = window.setTimeout(function () {
        copyBtn.removeAttribute('aria-label');
        copyBtn.removeAttribute('data-copied');
      }, 1400);
    }
  }

  function applyToArticleCode(articleCode) {
    if (!articleCode) return;

    var codeEl = articleCode.querySelector('.article-code__code');
    var gutterEl = articleCode.querySelector('.article-code__gutter');
    if (!codeEl) return;

    var raw = (codeEl.textContent || '').replace(/\r\n?/g, '\n');
    codeEl.dataset.rawCode = raw;

    if (gutterEl) {
      var lineCount = getLineCount(codeEl);
      var nums = [];
      for (var i = 1; i <= lineCount; i++) nums.push(String(i));
      gutterEl.textContent = nums.join('\n');
    }

    var copyBtn = articleCode.querySelector('.article-code__action[data-action="copy"]');
    if (!copyBtn || copyBtn.dataset.copyBound === '1') return;
    copyBtn.dataset.copyBound = '1';

    copyBtn.addEventListener('click', function () {
      var text = codeEl.dataset.rawCode || '';
      copyToClipboard(text).then(function () {
        setCopiedState(copyBtn, true);
      });
    });
  }

  function processRoot(root) {
    if (!root) return;
    var codes = root.querySelectorAll ? root.querySelectorAll('.article-code') : [];
    for (var i = 0; i < codes.length; i++) applyToArticleCode(codes[i]);
  }

  function init() {
    processRoot(document);

    // In case blocks are injected dynamically after page load.
    var observer = new MutationObserver(function (mutations) {
      for (var m = 0; m < mutations.length; m++) {
        var added = mutations[m].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var node = added[j];
          if (!(node instanceof Element)) continue;
          if (node.matches && node.matches('.article-code')) {
            applyToArticleCode(node);
          } else if (node.querySelectorAll) {
            processRoot(node);
          }
        }
      }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

