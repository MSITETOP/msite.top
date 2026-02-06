/**
 * Template Loader - загружает общие компоненты (header, footer) из шаблонов
 */
(function() {
  'use strict';

  const TemplateLoader = {
    /**
     * Определяет текущую страницу и язык для корректной настройки ссылок
     */
    getCurrentPageInfo: function() {
      const path = window.location.pathname;
      const filename = path.split('/').pop() || 'index.html';
      const isIndex = filename === 'index.html' || filename === 'index-es.html' || filename === '' || filename === '/';
      const isEs = filename.includes('-es.html') || document.documentElement.lang === 'es';
      
      return {
        isIndex: isIndex,
        isEs: isEs,
        filename: filename
      };
    },

    /**
     * Обновляет ссылки в header для текущей страницы
     */
    updateHeaderLinks: function(headerElement) {
      const pageInfo = this.getCurrentPageInfo();
      
      // Если мы на главной странице, используем якоря, иначе полные ссылки
      const baseUrl = pageInfo.isIndex ? '' : 'index.html';
      
      // Обновляем ссылки меню
      const menuLinks = headerElement.querySelectorAll('.header__menu a');
      if (menuLinks.length >= 6) {
        menuLinks[0].href = `${baseUrl}#services`;
        menuLinks[1].href = `${baseUrl}#why-bitrix24`;
        menuLinks[2].href = `${baseUrl}#why-us`;
        menuLinks[3].href = `${baseUrl}#testimonials`;
        menuLinks[4].href = `${baseUrl}#process`;
        menuLinks[5].href = `${baseUrl}#contact`;
      }
      
      // Обновляем ссылку на логотип
      const logoLink = headerElement.querySelector('.header__logo');
      if (logoLink) {
        logoLink.href = pageInfo.isIndex ? '#' : 'index.html';
      }
      
      // Обновляем CTA кнопки
      const ctaButtons = headerElement.querySelectorAll('.header__cta');
      ctaButtons.forEach(btn => {
        btn.href = `${baseUrl}#contact`;
      });
      
      // Обновляем переключатель языка
      const langLinks = headerElement.querySelectorAll('.lang-switcher__link');
      langLinks.forEach(link => {
        const filename = pageInfo.filename;
        if (pageInfo.isEs) {
          // Если текущая страница ES, ссылка должна вести на EN версию
          let enFilename = filename.replace('-es.html', '.html');
          if (enFilename === 'index.html' || enFilename === 'index') {
            enFilename = 'index.html';
          }
          link.href = enFilename;
        } else {
          // Если текущая страница EN, ссылка должна вести на ES версию
          let esFilename = filename.replace('.html', '-es.html');
          if (esFilename === 'index-es.html' || filename === 'index.html' || filename === 'index') {
            esFilename = 'index-es.html';
          }
          link.href = esFilename;
        }
      });
    },

    /**
     * Обновляет ссылки в footer для текущей страницы
     */
    updateFooterLinks: function(footerElement) {
      const pageInfo = this.getCurrentPageInfo();
      const baseUrl = pageInfo.isIndex ? '' : 'index.html';
      
      // Обновляем ссылки в колонках
      const serviceLinks = footerElement.querySelectorAll('.footer__col:first-child a');
      serviceLinks.forEach(link => {
        if (link.href.includes('#services')) {
          link.href = `${baseUrl}#services`;
        }
      });
      
      const companyLinks = footerElement.querySelectorAll('.footer__col:nth-child(2) a');
      companyLinks.forEach(link => {
        if (link.href.includes('#')) {
          const hash = link.hash || link.getAttribute('href').split('#')[1];
          link.href = `${baseUrl}${hash ? '#' + hash : ''}`;
        }
      });
      
      // Обновляем ссылку на логотип
      const logoLink = footerElement.querySelector('.footer__logo');
      if (logoLink) {
        logoLink.href = pageInfo.isIndex ? '#' : 'index.html';
      }
      
      // Обновляем переключатель языка в footer
      const langLink = footerElement.querySelector('.footer__lang .lang-switcher__link');
      if (langLink) {
        const filename = pageInfo.filename;
        if (pageInfo.isEs) {
          // Если текущая страница ES, ссылка должна вести на EN версию
          let enFilename = filename.replace('-es.html', '.html');
          if (enFilename === 'index.html' || enFilename === 'index') {
            enFilename = 'index.html';
          }
          langLink.href = enFilename;
        } else {
          // Если текущая страница EN, ссылка должна вести на ES версию
          let esFilename = filename.replace('.html', '-es.html');
          if (esFilename === 'index-es.html' || filename === 'index.html' || filename === 'index') {
            esFilename = 'index-es.html';
          }
          langLink.href = esFilename;
        }
      }
    },

    /**
     * Загружает HTML шаблон
     */
    async loadTemplate(templatePath) {
      try {
        const response = await fetch(templatePath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.text();
      } catch (error) {
        console.error(`Error loading template ${templatePath}:`, error);
        return null;
      }
    },

    /**
     * Загружает и вставляет header
     */
    async loadHeader(containerSelector = 'body') {
      const container = document.querySelector(containerSelector);
      if (!container) {
        console.error('Header container not found');
        return;
      }

      const headerHtml = await this.loadTemplate('templates/header.html');
      if (!headerHtml) return;

      // Создаем временный контейнер для парсинга HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = headerHtml.trim();
      const headerElement = tempDiv.querySelector('header');

      if (headerElement) {
        // Находим существующий header или плейсхолдер
        const existingHeader = container.querySelector('header.header');
        const placeholder = container.querySelector('#header-placeholder');
        
        if (existingHeader) {
          existingHeader.replaceWith(headerElement);
        } else if (placeholder) {
          placeholder.replaceWith(headerElement);
        } else {
          // Вставляем после открывающего тега body или перед main
          const main = container.querySelector('main');
          if (main) {
            main.before(headerElement);
          } else {
            container.insertBefore(headerElement, container.firstChild);
          }
        }

        // Обновляем ссылки для текущей страницы
        this.updateHeaderLinks(headerElement);
      }
    },

    /**
     * Загружает и вставляет footer
     */
    async loadFooter(containerSelector = 'body') {
      const container = document.querySelector(containerSelector);
      if (!container) {
        console.error('Footer container not found');
        return;
      }

      const footerHtml = await this.loadTemplate('templates/footer.html');
      if (!footerHtml) return;

      // Создаем временный контейнер для парсинга HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = footerHtml.trim();
      const footerElement = tempDiv.querySelector('footer');

      if (footerElement) {
        // Находим существующий footer или плейсхолдер
        const existingFooter = container.querySelector('footer.footer');
        const placeholder = container.querySelector('#footer-placeholder');
        
        if (existingFooter) {
          existingFooter.replaceWith(footerElement);
        } else if (placeholder) {
          placeholder.replaceWith(footerElement);
        } else {
          // Вставляем перед закрывающим тегом body или после main
          const main = container.querySelector('main');
          if (main) {
            main.after(footerElement);
          } else {
            container.appendChild(footerElement);
          }
        }

        // Обновляем ссылки для текущей страницы
        this.updateFooterLinks(footerElement);
      }
    },

    /**
     * Загружает все шаблоны
     */
    async loadAll() {
      await Promise.all([
        this.loadHeader(),
        this.loadFooter()
      ]);
    },

    /**
     * Инициализация
     */
    async init() {
      // Ждем загрузки DOM
      if (document.readyState === 'loading') {
        await new Promise(resolve => {
          document.addEventListener('DOMContentLoaded', resolve);
        });
      }

      await this.loadAll();
    }
  };

  // Автоматическая инициализация
  // Создаем событие для уведомления о загрузке шаблонов
  TemplateLoader.init().then(() => {
    // Уведомляем, что шаблоны загружены
    document.dispatchEvent(new CustomEvent('templatesLoaded'));
  }).catch(error => {
    console.error('Error loading templates:', error);
    // Все равно уведомляем, чтобы не блокировать другие скрипты
    document.dispatchEvent(new CustomEvent('templatesLoaded'));
  });

  // Экспорт для глобального доступа
  window.TemplateLoader = TemplateLoader;
})();
