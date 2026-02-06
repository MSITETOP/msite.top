/**
 * Content Loader - загружает контент страниц из JSON и локали UI из locales
 */
(function() {
  'use strict';

  const ContentLoader = {
    locale: 'en',
    pageContent: null,
    uiLocale: null,

    /**
     * Определяет язык страницы из HTML lang атрибута или из URL
     */
    detectLanguage: function() {
      const htmlLang = document.documentElement.lang || 'en';
      const path = window.location.pathname;
      
      if (path.includes('-es.html') || htmlLang === 'es') {
        this.locale = 'es';
      } else {
        this.locale = 'en';
      }
      
      return this.locale;
    },

    /**
     * Определяет имя страницы из URL
     */
    getPageName: function() {
      const path = window.location.pathname;
      const filename = path.split('/').pop() || 'index.html';
      
      if (filename === 'index.html' || filename === 'index-es.html' || filename === '' || filename === '/') {
        return this.locale === 'es' ? 'index-es' : 'index';
      }
      
      // Убираем расширение и суффикс языка
      return filename.replace('.html', '').replace('-es', '');
    },

    /**
     * Загружает JSON файл
     */
    loadJSON: async function(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('Error loading JSON:', error);
        return null;
      }
    },

    /**
     * Загружает контент страницы и UI локали
     */
    async loadContent() {
      const pageName = this.getPageName();
      const pagePath = `content/pages/${pageName}.json`;
      const localePath = `locales/${this.locale}.json`;

      const [pageData, uiData] = await Promise.all([
        this.loadJSON(pagePath),
        this.loadJSON(localePath)
      ]);

      if (pageData) {
        this.pageContent = pageData;
      }
      if (uiData) {
        this.uiLocale = uiData.ui;
      }

      return { pageContent: pageData, uiLocale: uiData?.ui };
    },

    /**
     * Обновляет meta теги из контента
     */
    updateMeta: function() {
      if (!this.pageContent?.meta) return;

      const meta = this.pageContent.meta;
      
      if (meta.title) {
        document.title = meta.title;
      }
      if (meta.description) {
        const desc = document.querySelector('meta[name="description"]');
        if (desc) desc.content = meta.description;
      }
      if (meta.keywords) {
        const keywords = document.querySelector('meta[name="keywords"]');
        if (keywords) keywords.content = meta.keywords;
      }
    },

    /**
     * Обновляет header навигацию из UI локали
     */
    updateHeader: function() {
      if (!this.uiLocale?.header) return;

      const nav = this.uiLocale.header.nav;
      const navLinks = document.querySelectorAll('.header__menu a');
      
      if (navLinks.length >= 7) {
        navLinks[0].textContent = nav.services;
        navLinks[1].textContent = nav.whyBitrix24;
        navLinks[2].textContent = nav.about;
        navLinks[3].textContent = nav.testimonials;
        navLinks[4].textContent = nav.cases;
        navLinks[5].textContent = nav.process;
        navLinks[6].textContent = nav.contact;
      } else if (navLinks.length >= 5) {
        navLinks[0].textContent = nav.services;
        navLinks[1].textContent = nav.whyBitrix24;
        navLinks[2].textContent = nav.about;
        navLinks[3].textContent = nav.process;
        navLinks[4].textContent = nav.contact;
      } else if (navLinks.length >= 4) {
        // Fallback для старых страниц с 4 пунктами меню
        navLinks[0].textContent = nav.services;
        navLinks[1].textContent = nav.about;
        navLinks[2].textContent = nav.blog;
        navLinks[3].textContent = nav.contact;
      }

      const ctaButtons = document.querySelectorAll('.header__cta');
      ctaButtons.forEach(btn => {
        btn.textContent = nav.requestDemo;
      });

      const burger = document.querySelector('.header__burger');
      if (burger) {
        burger.setAttribute('aria-label', this.uiLocale.header.menuOpen);
      }
    },

    /**
     * Обновляет footer из UI локали и контента страницы
     */
    updateFooter: function() {
      if (!this.uiLocale?.footer) return;

      const footer = this.uiLocale.footer;
      
      // Описание из контента страницы или UI
      const footerDesc = document.querySelector('.footer__description');
      if (footerDesc && this.pageContent?.footer?.description) {
        footerDesc.textContent = this.pageContent.footer.description;
      }

      // Колонки
      const colTitles = document.querySelectorAll('.footer__col-title');
      if (colTitles.length >= 3) {
        colTitles[0].textContent = footer.columns.services;
        colTitles[1].textContent = footer.columns.company;
        colTitles[2].textContent = footer.columns.legal;
      }

      // Ссылки в колонках
      const footerCols = document.querySelectorAll('.footer__col');
      if (footerCols.length >= 3) {
        // Первая колонка - Services (5 ссылок)
        const serviceLinks = footerCols[0].querySelectorAll('a');
        const serviceKeys = ['installation', 'customization', 'support', 'training', 'integration'];
        serviceLinks.forEach((link, i) => {
          if (serviceKeys[i] && footer.links[serviceKeys[i]]) {
            link.textContent = footer.links[serviceKeys[i]];
          }
        });
        
        // Вторая колонка - Company (3 ссылки)
        const companyLinks = footerCols[1].querySelectorAll('a');
        if (companyLinks.length >= 3) {
          companyLinks[0].textContent = footer.links.about;
          companyLinks[1].textContent = footer.links.blog;
          companyLinks[2].textContent = footer.links.contact;
        }
        
        // Третья колонка - Legal (3 ссылки)
        const legalLinks = footerCols[2].querySelectorAll('a');
        if (legalLinks.length >= 3) {
          legalLinks[0].textContent = footer.links.privacy;
          legalLinks[0].href = this.locale === 'es' ? 'privacy-policy-es.html' : 'privacy-policy.html';
          legalLinks[1].textContent = footer.links.terms;
          legalLinks[1].href = this.locale === 'es' ? 'terms-es.html' : 'terms.html';
          legalLinks[2].textContent = footer.links.gdpr;
          legalLinks[2].href = this.locale === 'es' ? 'gdpr-es.html' : 'gdpr.html';
        }
      }

      // Бейдж и копирайт
      // Badge теперь изображение, не нужно устанавливать текст
      
      const copyright = document.querySelector('.footer__copyright');
      if (copyright) {
        const year = new Date().getFullYear();
        copyright.innerHTML = `&copy; ${year} ${footer.copyright}`;
      }
    },

    /**
     * Обновляет sticky CTA панель из UI локали
     */
    updateStickyCta: function() {
      if (!this.uiLocale?.cta?.sticky) return;

      const stickyCta = document.getElementById('sticky-cta');
      if (!stickyCta) return;

      const text = stickyCta.querySelector('.sticky-cta__text');
      const primaryBtn = stickyCta.querySelector('.sticky-cta__btn--primary');
      const secondaryBtn = stickyCta.querySelector('.sticky-cta__btn--secondary');

      if (text) text.textContent = this.uiLocale.cta.sticky.text;
      if (primaryBtn) primaryBtn.textContent = this.uiLocale.cta.sticky.primary;
      if (secondaryBtn) secondaryBtn.textContent = this.uiLocale.cta.sticky.secondary;
    },

    /**
     * Обновляет контент главной страницы
     */
    updateIndexPage: function() {
      if (!this.pageContent) return;

      const content = this.pageContent;

      // Hero
      if (content.hero) {
        const badge = document.querySelector('.hero__badge');
        const title = document.querySelector('.hero__title');
        const subtitle = document.querySelector('.hero__subtitle');
        const ctaPrimary = document.querySelector('.hero__actions .btn--primary');
        const ctaSecondary = document.querySelector('.hero__actions .btn--secondary');
        const ctaNote = document.querySelector('.hero__cta-note');

        if (badge && content.hero.badge) badge.textContent = content.hero.badge;
        if (title && content.hero.title) title.textContent = content.hero.title;
        if (subtitle && content.hero.subtitle) subtitle.textContent = content.hero.subtitle;
        if (ctaPrimary && content.hero.ctaPrimary) ctaPrimary.textContent = content.hero.ctaPrimary;
        if (ctaSecondary && content.hero.ctaSecondary) ctaSecondary.textContent = content.hero.ctaSecondary;
        if (ctaNote && content.hero.ctaNote) ctaNote.textContent = content.hero.ctaNote;
      }

      // Services
      if (content.services) {
        const sectionTitle = document.querySelector('#services .section__title');
        const sectionSubtitle = document.querySelector('#services .section__subtitle');
        const sectionIntro = document.querySelector('#services .section__intro');

        if (sectionTitle) sectionTitle.textContent = content.services.title;
        if (sectionSubtitle) sectionSubtitle.textContent = content.services.subtitle;
        if (sectionIntro) sectionIntro.textContent = content.services.intro;

        // Service cards
        const serviceCards = document.querySelectorAll('.service-card');
        if (content.services.items && serviceCards.length === content.services.items.length) {
          serviceCards.forEach((card, i) => {
            const item = content.services.items[i];
            const cardTitle = card.querySelector('.service-card__title');
            const cardText = card.querySelector('.service-card__text');
            const cardLink = card.querySelector('.service-card__link');
            const cardCta = card.querySelector('.service-card__cta');

            if (cardTitle && item.title) cardTitle.textContent = item.title;
            if (cardText && item.description) cardText.textContent = item.description;
            if (cardLink && this.uiLocale?.cta?.service?.learnMore) cardLink.textContent = this.uiLocale.cta.service.learnMore;
            if (cardCta && this.uiLocale?.cta?.service?.contact) cardCta.textContent = this.uiLocale.cta.service.contact;
          });
        }
      }

      // Why Bitrix24
      if (content.whyBitrix24) {
        const sectionTitle = document.querySelector('#why-bitrix24 .section__title');
        const sectionSubtitle = document.querySelector('#why-bitrix24 .section__subtitle');
        const sectionIntro = document.querySelector('#why-bitrix24 .section__intro');

        if (sectionTitle) sectionTitle.textContent = content.whyBitrix24.title;
        if (sectionSubtitle) sectionSubtitle.textContent = content.whyBitrix24.subtitle;
        if (sectionIntro) sectionIntro.textContent = content.whyBitrix24.intro;

        const benefitsList = document.querySelector('#why-bitrix24 .benefits-dl');
        if (benefitsList && content.whyBitrix24.items) {
          const items = benefitsList.querySelectorAll('.benefits-dl__item');
          if (items.length === content.whyBitrix24.items.length) {
            items.forEach((itemEl, i) => {
              const item = content.whyBitrix24.items[i];
              const dt = itemEl.querySelector('dt');
              const dd = itemEl.querySelector('dd');
              if (dt) {
                const icon = dt.querySelector('.benefits-dl__icon');
                dt.innerHTML = icon ? `<span class="benefits-dl__icon"></span>${item.title}` : item.title;
              }
              if (dd) dd.textContent = item.text;
            });
          }
        }
      }

      // Why Us
      if (content.whyUs) {
        const sectionTitle = document.querySelector('#why-us .section__title');
        const sectionSubtitle = document.querySelector('#why-us .section__subtitle');
        const sectionIntro = document.querySelector('#why-us .section__intro');

        if (sectionTitle) sectionTitle.textContent = content.whyUs.title;
        if (sectionSubtitle) sectionSubtitle.textContent = content.whyUs.subtitle;
        if (sectionIntro) sectionIntro.textContent = content.whyUs.intro;

        const benefitsList = document.querySelector('#why-us .benefits-dl');
        if (benefitsList && content.whyUs.items) {
          const items = benefitsList.querySelectorAll('.benefits-dl__item');
          if (items.length === content.whyUs.items.length) {
            items.forEach((itemEl, i) => {
              const item = content.whyUs.items[i];
              const dt = itemEl.querySelector('dt');
              const dd = itemEl.querySelector('dd');
              if (dt) {
                const icon = dt.querySelector('.benefits-dl__icon');
                dt.innerHTML = icon ? `<span class="benefits-dl__icon"></span>${item.title}` : item.title;
              }
              if (dd) dd.textContent = item.text;
            });
          }
        }
      }

      // Testimonials
      if (content.testimonials) {
        const sectionTitle = document.querySelector('.section--testimonials .section__title');
        const sectionSubtitle = document.querySelector('.section--testimonials .section__subtitle');
        
        if (sectionTitle) sectionTitle.textContent = content.testimonials.title;
        if (sectionSubtitle) sectionSubtitle.textContent = content.testimonials.subtitle;

        const testimonialCards = document.querySelectorAll('.testimonial-card');
        if (testimonialCards.length === content.testimonials.items.length) {
          testimonialCards.forEach((card, i) => {
            const item = content.testimonials.items[i];
            const quote = card.querySelector('.testimonial-card__quote');
            const name = card.querySelector('.testimonial-card__name');
            const role = card.querySelector('.testimonial-card__role');
            const date = card.querySelector('.testimonial-card__date');
            const stars = card.querySelector('.testimonial-card__stars');
            const avatarImg = card.querySelector('.testimonial-card__avatar-img');

            if (quote) quote.textContent = item.quote;
            if (name) name.textContent = item.name;
            if (role) role.textContent = `${item.role}, ${item.company}`;
            if (date && item.date) {
              const dateObj = new Date(item.date);
              date.textContent = dateObj.toLocaleDateString(this.locale === 'es' ? 'es-ES' : 'en-US', { 
                year: 'numeric', month: 'long' 
              });
              date.setAttribute('datetime', item.date);
            }
            if (stars && item.rating) {
              stars.textContent = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);
            }
            if (avatarImg) {
              if (item.avatar) {
                avatarImg.src = item.avatar;
                avatarImg.alt = item.name;
              } else {
                // Generate initials avatar if no image provided
                const initials = item.name.split(' ').map(n => n[0]).join('').toUpperCase();
                avatarImg.style.display = 'none';
                const avatar = card.querySelector('.testimonial-card__avatar');
                if (avatar) {
                  avatar.style.display = 'flex';
                  avatar.textContent = initials;
                  avatar.style.color = '#fff';
                  avatar.style.fontWeight = '600';
                  avatar.style.fontSize = '1.125rem';
                }
              }
            }
          });
        }
      }

      // Case Studies
      if (content.cases) {
        const sectionTitle = document.querySelector('.section--cases .section__title');
        const sectionSubtitle = document.querySelector('.section--cases .section__subtitle');
        
        if (sectionTitle) sectionTitle.textContent = content.cases.title;
        if (sectionSubtitle) sectionSubtitle.textContent = content.cases.subtitle;

        const caseCards = document.querySelectorAll('.case-card');
        if (caseCards.length === content.cases.items.length) {
          caseCards.forEach((card, i) => {
            const item = content.cases.items[i];
            const title = card.querySelector('.case-card__title');
            const challenge = card.querySelector('.case-card__challenge');
            const solutionTitle = card.querySelector('.case-card__solution-title');
            const solutionText = card.querySelector('.case-card__solution-text');
            const industry = card.querySelector('.case-card__industry');
            const logoImg = card.querySelector('.case-card__logo-img');
            const metrics = card.querySelectorAll('.case-card__metric');
            const beforeList = card.querySelector('.case-card__before .case-card__ba-list');
            const afterList = card.querySelector('.case-card__after .case-card__ba-list');

            if (title) title.textContent = item.title;
            if (challenge) challenge.textContent = item.challenge;
            if (solutionTitle) solutionTitle.textContent = item.solution.title;
            if (solutionText) solutionText.textContent = item.solution.text;
            if (industry) industry.textContent = item.industry;
            if (logoImg && item.logo) {
              logoImg.src = item.logo;
              logoImg.alt = item.company;
            }
            
            // Metrics
            if (metrics.length === item.metrics.length) {
              metrics.forEach((metric, j) => {
                const value = metric.querySelector('.case-card__metric-value');
                const label = metric.querySelector('.case-card__metric-label');
                if (value) value.textContent = item.metrics[j].value;
                if (label) label.textContent = item.metrics[j].label;
              });
            }

            // Before/After lists
            if (beforeList && item.before) {
              beforeList.innerHTML = item.before.map(point => `<li>${point}</li>`).join('');
            }
            if (afterList && item.after) {
              afterList.innerHTML = item.after.map(point => `<li>${point}</li>`).join('');
            }
            
            // Update Before/After titles based on locale
            const beforeTitle = card.querySelector('.case-card__before .case-card__ba-title');
            const afterTitle = card.querySelector('.case-card__after .case-card__ba-title');
            if (beforeTitle) {
              beforeTitle.textContent = this.locale === 'es' ? 'Antes' : 'Before';
            }
            if (afterTitle) {
              afterTitle.textContent = this.locale === 'es' ? 'Después' : 'After';
            }
          });
        }
      }

      // Process
      if (content.process) {
        const sectionTitle = document.querySelector('.section--process .section__title');
        const sectionSubtitle = document.querySelector('.section--process .section__subtitle');
        
        if (sectionTitle) sectionTitle.textContent = content.process.title;
        if (sectionSubtitle) sectionSubtitle.textContent = content.process.subtitle;

        const processSteps = document.querySelectorAll('.process-step');
        if (processSteps.length === content.process.steps.length) {
          processSteps.forEach((step, i) => {
            const item = content.process.steps[i];
            const stepTitle = step.querySelector('.process-step__title');
            const stepText = step.querySelector('.process-step__text');

            if (stepTitle) stepTitle.textContent = item.title;
            if (stepText) stepText.textContent = item.description;
          });
        }
      }

      // Blog
      if (content.blog) {
        const sectionTitle = document.querySelector('.section--blog .section__title');
        const sectionSubtitle = document.querySelector('.section--blog .section__subtitle');
        
        if (sectionTitle) sectionTitle.textContent = content.blog.title;
        if (sectionSubtitle) sectionSubtitle.textContent = content.blog.subtitle;

        const blogCards = document.querySelectorAll('.blog-card');
        if (blogCards.length === content.blog.posts.length) {
          blogCards.forEach((card, i) => {
            const post = content.blog.posts[i];
            const cardTitle = card.querySelector('.blog-card__title a');
            const cardExcerpt = card.querySelector('.blog-card__excerpt');
            const cardDate = card.querySelector('.blog-card__date');
            const cardLink = card.querySelector('.blog-card__link');

            if (cardTitle) cardTitle.textContent = post.title;
            if (cardExcerpt) cardExcerpt.textContent = post.excerpt;
            if (cardDate) {
              const date = new Date(post.date);
              cardDate.textContent = date.toLocaleDateString(this.locale === 'es' ? 'es-ES' : 'en-US', { 
                year: 'numeric', month: 'short', day: 'numeric' 
              });
              cardDate.setAttribute('datetime', post.date);
            }
            if (cardLink && this.uiLocale?.common?.readMore) cardLink.textContent = this.uiLocale.common.readMore;
          });
        }

        const viewAllBtn = document.querySelector('.section--blog .btn--secondary');
        if (viewAllBtn && this.uiLocale?.common?.viewAll) {
          viewAllBtn.textContent = this.uiLocale.common.viewAll;
        }
      }

      // Contact
      if (content.contact) {
        const sectionTitle = document.querySelector('#contact .section__title');
        const sectionSubtitle = document.querySelector('#contact .section__subtitle');
        
        if (sectionTitle) sectionTitle.textContent = content.contact.title;
        if (sectionSubtitle) sectionSubtitle.textContent = content.contact.subtitle;

        const form = document.querySelector('#contact-form');
        if (form && content.contact.form) {
          const formLabels = form.querySelectorAll('.contact-form__label-text');
          const formInputs = form.querySelectorAll('.contact-form__input');
          const submitBtn = form.querySelector('.contact-form__submit');

          if (formLabels.length >= 5) {
            formLabels[0].textContent = content.contact.form.name;
            formLabels[1].textContent = content.contact.form.email;
            formLabels[2].textContent = content.contact.form.phone;
            formLabels[3].textContent = content.contact.form.company;
            formLabels[4].textContent = content.contact.form.message;
          }

          if (formInputs.length >= 5) {
            formInputs[0].placeholder = this.locale === 'en' ? 'John Smith' : 'Juan García';
            formInputs[1].placeholder = this.locale === 'en' ? 'john@company.com' : 'juan@empresa.com';
            formInputs[2].placeholder = this.locale === 'en' ? '+44 20 0000 0000' : '+34 600 000 000';
            formInputs[3].placeholder = this.locale === 'en' ? 'Your company' : 'Tu empresa';
            formInputs[4].placeholder = content.contact.form.message;
          }

          const gdprLabel = form.querySelector('.contact-form__label--checkbox .contact-form__label-text');
          if (gdprLabel) {
            const privacyLink = this.locale === 'es' ? 'privacy-policy-es.html' : 'privacy-policy.html';
            gdprLabel.innerHTML = content.contact.form.gdpr.replace(
              'Privacy Policy', 
              `<a href="${privacyLink}">Privacy Policy</a>`
            ).replace(
              'Política de Privacidad',
              `<a href="${privacyLink}">Política de Privacidad</a>`
            );
          }

          if (submitBtn && content.contact.form.submit) submitBtn.textContent = content.contact.form.submit;
        }
      }
    },

    /**
     * Обновляет контент юридических страниц
     */
    updateLegalPage: function() {
      if (!this.pageContent?.content) return;

      const content = this.pageContent.content;
      const legalContent = document.querySelector('.legal-content');
      if (!legalContent) return;

      const h1 = legalContent.querySelector('h1');
      const meta = legalContent.querySelector('.legal-meta');

      if (h1 && content.title) h1.textContent = content.title;
      if (meta && content.lastUpdated) {
        const lastUpdatedText = this.locale === 'es' ? 'Última actualización' : 'Last updated';
        meta.textContent = `${lastUpdatedText}: ${content.lastUpdated}`;
      }

      if (content.sections && Array.isArray(content.sections)) {
        let html = '';
        content.sections.forEach(section => {
          html += `<h2>${section.title}</h2>`;
          
          if (section.paragraphs) {
            section.paragraphs.forEach(p => {
              // Обработка контактов с переносами строк
              if (p.includes('\n')) {
                html += `<p>${p.split('\n').map(line => {
                  if (line.includes('b24@msite.top')) {
                    return line.replace(/b24@msite\.top/g, '<a href="mailto:b24@msite.top">b24@msite.top</a>');
                  }
                  if (line.includes('+34')) {
                    return line.replace(/(\+34\s?[0-9\s]+)/g, (match) => {
                      const tel = match.replace(/\s+/g, '');
                      return `<a href="tel:${tel}">${match}</a>`;
                    });
                  }
                  return line;
                }).join('<br>')}</p>`;
              } else {
                let para = p;
                para = para.replace(/b24@msite\.top/g, '<a href="mailto:b24@msite.top">b24@msite.top</a>');
                para = para.replace(/(\+34\s?[0-9\s]+)/g, (match) => {
                  const tel = match.replace(/\s+/g, '');
                  return `<a href="tel:${tel}">${match}</a>`;
                });
                html += `<p>${para}</p>`;
              }
            });
          }

          if (section.subsections) {
            section.subsections.forEach(sub => {
              html += `<h3>${sub.title}</h3>`;
              if (sub.paragraphs) {
                sub.paragraphs.forEach(p => html += `<p>${p}</p>`);
              }
              if (sub.list) {
                html += '<ul>';
                sub.list.forEach(item => {
                  const parts = item.split(':');
                  if (parts.length > 1) {
                    html += `<li><strong>${parts[0]}:</strong> ${parts.slice(1).join(':')}</li>`;
                  } else {
                    html += `<li>${item}</li>`;
                  }
                });
                html += '</ul>';
              }
            });
          }

          if (section.list) {
            html += '<ul>';
            section.list.forEach(item => {
              const parts = item.split(':');
              if (parts.length > 1) {
                html += `<li><strong>${parts[0]}:</strong> ${parts.slice(1).join(':')}</li>`;
              } else {
                html += `<li>${item}</li>`;
              }
            });
            html += '</ul>';
          }

          if (section.paragraphsAfter) {
            section.paragraphsAfter.forEach(p => {
              let para = p;
              para = para.replace(/b24@msite\.top/g, '<a href="mailto:b24@msite.top">b24@msite.top</a>');
              para = para.replace(/(\+34\s?[0-9\s]+)/g, (match) => {
                const tel = match.replace(/\s+/g, '');
                return `<a href="tel:${tel}">${match}</a>`;
              });
              html += `<p>${para}</p>`;
            });
          }
        });

        // Заменяем весь контент после h1 и meta
        const existingContent = legalContent.querySelectorAll('h2, h3, p:not(.legal-meta), ul, ol');
        existingContent.forEach(el => el.remove());
        legalContent.insertAdjacentHTML('beforeend', html);
      }
    },

    /**
     * Инициализация - загружает контент и обновляет страницу
     */
    async init() {
      this.detectLanguage();
      await this.loadContent();
      
      this.updateMeta();
      this.updateHeader();
      this.updateFooter();
      this.updateStickyCta();

      const pageName = this.getPageName();
      if (pageName === 'index' || pageName === 'index-es') {
        this.updateIndexPage();
      } else if (pageName.includes('privacy') || pageName.includes('terms') || pageName.includes('gdpr')) {
        this.updateLegalPage();
      }
    }
  };

  // Автоматическая инициализация при загрузке DOM и шаблонов
  function initContentLoader() {
    // Ждем загрузки шаблонов, если template-loader еще не загрузил их
    if (document.querySelector('header.header') && document.querySelector('footer.footer')) {
      // Шаблоны уже загружены
      ContentLoader.init();
    } else {
      // Ждем события о загрузке шаблонов
      document.addEventListener('templatesLoaded', () => {
        ContentLoader.init();
      }, { once: true });
      
      // Fallback: если событие не пришло в течение 2 секунд, инициализируем все равно
      setTimeout(() => {
        if (!document.querySelector('header.header') || !document.querySelector('footer.footer')) {
          console.warn('Templates not loaded, initializing content-loader anyway');
        }
        ContentLoader.init();
      }, 2000);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContentLoader);
  } else {
    initContentLoader();
  }

  // Экспорт для глобального доступа
  window.ContentLoader = ContentLoader;
})();
