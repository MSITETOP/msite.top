# Инструкция по сборке лендинга в Bitrix24 Sites

Этот документ содержит подробные инструкции по созданию каждого блока лендинга в конструкторе Bitrix24 Sites.

## Общие настройки страницы

### SEO и метаданные
- **Заголовок страницы**: "Bitrix24 Implementation & Customization in Europe | MSITE.TOP"
- **Meta description**: "Silver Partner Bitrix24: implementation, CRM customization, automation, and support for EU businesses. Cloud and on-premise. GDPR-ready. Free consultation."
- **Keywords**: "Bitrix24 implementation Europe, Bitrix24 customization, Bitrix24 consultant EU, CRM setup Bitrix24, Bitrix24 support, Bitrix24 Silver Partner"

### Цветовая схема
- **Основной цвет**: #CA2F5D (магента)
- **Цвет текста**: #000000 (черный)
- **Фон**: #ffffff (белый)
- **Фон альтернативный**: #f8f8f8 (светло-серый)

### Шрифты
- **Основной шрифт**: Inter (Google Fonts)
- Веса: 400, 500, 600, 700, 800

---

## БЛОК 1: Header (Шапка сайта)

### Компонент Bitrix24 Sites
Используйте блок **"Меню"** или **"Шапка сайта"** из библиотеки блоков.

### Структура блока

#### Логотип
- **Тип**: Изображение
- **Файл**: `assets/logo.png`
- **Размер**: 140x44px
- **Alt текст**: "MSITE.TOP"
- **Ссылка**: На главную страницу (якорь `#hero` или `/`)

#### Навигационное меню
Создайте меню со следующими пунктами:
1. **Services** → ссылка на `#services`
2. **Why Bitrix24** → ссылка на `#why-bitrix24`
3. **About Us** → ссылка на `#why-us`
4. **How We Work** → ссылка на `#process`
5. **Contact** → ссылка на `#contact`

#### Переключатель языка
- **EN** (активный) → ссылка на `index.html` или главная страница
- **ES** → ссылка на `index-es.html` или испанская версия

#### Кнопка CTA
- **Текст**: "Request Demo"
- **Стиль**: Основная кнопка (цвет #CA2F5D)
- **Ссылка**: На `#contact` или форму обратной связи

### Настройки отображения
- **Позиция**: Закреплена сверху (sticky)
- **Мобильная версия**: Гамбургер-меню для экранов < 768px

---

## БЛОК 2: Hero (Главный экран)

### Компонент Bitrix24 Sites
Используйте блок **"Обложка"** или **"Hero блок"** из библиотеки.

### Структура блока

#### Фоновое изображение
- Используйте фоновое изображение или градиент
- Файл фона: `assets/` (если есть фоновое изображение)
- Альтернатива: Градиентный фон или цветной фон

#### Бейдж "Silver Partner"
- **Тип**: Изображение
- **Файл**: `assets/bitrix24-silver-partner.png`
- **Позиция**: Вверху блока, по центру или слева
- **Alt текст**: "Bitrix24 Silver Partner"

#### Заголовок H1
```
We bring order to your business with Bitrix24
```
- **Стиль**: Крупный заголовок (H1)
- **Цвет**: Черный (#000000)
- **Выравнивание**: По центру или слева

#### Подзаголовок
```
From CRM chaos to clear processes — we implement and customize Bitrix24 for European teams. Cloud or on-premise. GDPR-ready.
```
- **Стиль**: Обычный текст, размер 18-20px
- **Цвет**: Темно-серый (#4a4a4a)
- **Выравнивание**: По центру или слева

#### Кнопки действий
1. **Основная кнопка**:
   - Текст: "Book a Free Consultation"
   - Стиль: Основная кнопка (#CA2F5D)
   - Ссылка: `#contact`
   - Размер: Большая (padding увеличенный)

2. **Вторичная кнопка**:
   - Текст: "See What We Offer"
   - Стиль: Кнопка с обводкой (border #CA2F5D)
   - Ссылка: `#services`
   - Размер: Большая

### Настройки блока
- **Высота**: Полноэкранная или минимум 600px
- **Выравнивание контента**: По центру или слева
- **Отступы**: Вертикальные отступы для контента

---

## БЛОК 3: Services (Услуги)

### Компонент Bitrix24 Sites
Используйте блок **"Карточки услуг"** или **"Сетка с карточками"** из библиотеки.

### Заголовок секции
- **H2**: "What We Do"
- **Подзаголовок**: "Full-cycle Bitrix24: installation, customization, automation, integrations, and custom development."
- **Вводный текст**: "We adapt Bitrix24 to your processes so your team can work in one place — without switching between tools."

### Карточки услуг (7 штук)

#### Карточка 1: Installation & Setup
- **Иконка**: `assets/icons/installation.svg`
- **Заголовок**: "Installation & Setup"
- **Текст**: "We configure your Bitrix24 from scratch: initial setup, data migration from spreadsheets or other CRMs, server and security settings, and role-based access so everyone sees only what they need."
- **Кнопка**: "Contact Us" (основная) → `#contact`
- **Ссылка**: "Learn more" → `#contact`

#### Карточка 2: Customization
- **Иконка**: `assets/icons/customization.svg`
- **Заголовок**: "Customization"
- **Текст**: "We align Bitrix24 with your workflows: custom fields and pipelines, branded interface, and processes that match how your sales and operations teams actually work."
- **Ссылка**: "Learn more" → `#contact`

#### Карточка 3: Technical Support
- **Иконка**: `assets/icons/support.svg`
- **Заголовок**: "Technical Support"
- **Текст**: "Ongoing help when you need it: quick answers, diagnostics, updates, and best practices so your Bitrix24 stays stable and up to date."
- **Ссылка**: "Learn more" → `#contact`

#### Карточка 4: Training & Consulting
- **Иконка**: `assets/icons/training.svg`
- **Заголовок**: "Training & Consulting"
- **Текст**: "We train your team on Bitrix24 and advise on structure and processes so adoption is fast and usage is effective from day one."
- **Ссылка**: "Learn more" → `#contact`

#### Карточка 5: Automation
- **Иконка**: `assets/icons/automation.svg`
- **Заголовок**: "Automation"
- **Текст**: "We design and set up automation for sales, marketing, and internal workflows so repetitive tasks run on their own and your team can focus on decisions."
- **Ссылка**: "Learn more" → `#contact`

#### Карточка 6: Integration
- **Иконка**: `assets/icons/integration.svg`
- **Заголовок**: "Integration"
- **Текст**: "We connect Bitrix24 with your existing systems: ERP, email, telephony, e-commerce, or custom apps via API, so data flows in one direction and stays in sync."
- **Ссылка**: "Learn more" → `#contact`

#### Карточка 7: Application Development
- **Иконка**: `assets/icons/development.svg`
- **Заголовок**: "Application Development"
- **Текст**: "We build custom modules, mobile extensions, and portal add-ons on top of Bitrix24 when out-of-the-box features are not enough for your business."
- **Ссылка**: "Learn more" → `#contact`

### Настройки сетки
- **Колонки**: 3 колонки на десктопе, 2 на планшете, 1 на мобильном
- **Отступы между карточками**: 24-32px
- **Стиль карточек**: С тенью, скругленными углами, белый фон

---

## БЛОК 4: Why Bitrix24 (Почему Bitrix24)

### Компонент Bitrix24 Sites
Используйте блок **"Список преимуществ"** или **"Особенности"** из библиотеки.

### Заголовок секции
- **H2**: "Why Bitrix24"
- **Подзаголовок**: "One platform for CRM, projects, and communication"
- **Вводный текст**: "Bitrix24 gives you CRM, tasks, projects, chat, and documents in one place. You can start free and scale as you grow, with options that fit European requirements."

### Список преимуществ (6 пунктов, 2 колонки)

1. **All-in-one**
   - Описание: "CRM, projects, tasks, chat, and documents in a single workspace."
   - Иконка: Галочка или иконка из библиотеки

2. **Free plan**
   - Описание: "Unlimited users on the free plan so the whole team can try it."
   - Иконка: Галочка или иконка из библиотеки

3. **Cloud or on-premise**
   - Описание: "Choose cloud hosting or install on your own servers in the EU."
   - Иконка: Галочка или иконка из библиотеки

4. **Automation**
   - Описание: "Built-in automation for sales, marketing, and workflows."
   - Иконка: Галочка или иконка из библиотеки

5. **European presence**
   - Описание: "Data centres and support options for European businesses."
   - Иконка: Галочка или иконка из библиотеки

6. **GDPR-ready**
   - Описание: "Tools and settings to help you meet GDPR and data protection needs."
   - Иконка: Галочка или иконка из библиотеки

### Настройки блока
- **Расположение**: 2 колонки на десктопе, 1 колонка на мобильном
- **Стиль**: Список с иконками слева или сверху

---

## БЛОК 5: Why Work With Us (Почему работать с нами)

### Компонент Bitrix24 Sites
Используйте блок **"Список преимуществ"** или **"Особенности"** из библиотеки (аналогично блоку 4).

### Заголовок секции
- **H2**: "Why Work With Us"
- **Подзаголовок**: "Your Bitrix24 partner focused on Europe"
- **Вводный текст**: "We are a Bitrix24 Silver Partner and specialise in implementation and customization for companies in the EU and UK. We take care of setup, training, and support so you get a system that fits your business."

### Список преимуществ (6 пунктов, 2 колонки)

1. **Silver Partner**
   - Описание: "Official Bitrix24 Silver Partner with direct access to updates and support."
   - Иконка: Галочка или иконка из библиотеки

2. **Europe-focused**
   - Описание: "We work in European time zones and understand local compliance and practices."
   - Иконка: Галочка или иконка из библиотеки

3. **Custom development**
   - Описание: "We build custom modules and integrations when standard features are not enough."
   - Иконка: Галочка или иконка из библиотеки

4. **Full service**
   - Описание: "From installation and customization to training and ongoing support."
   - Иконка: Галочка или иконка из библиотеки

5. **Clear process**
   - Описание: "Structured steps from consultation to go-live and beyond."
   - Иконка: Галочка или иконка из библиотеки

6. **Proven experience**
   - Описание: "Successful implementations across different industries and company sizes. From SMEs to larger teams across EU and UK."
   - Иконка: Галочка или иконка из библиотеки

### Настройки блока
- **Расположение**: 2 колонки на десктопе, 1 колонка на мобильном
- **Стиль**: Список с иконками слева или сверху

---

## БЛОК 6: Testimonials (Отзывы клиентов)

### Компонент Bitrix24 Sites
Используйте блок **"Отзывы"** или **"Отзывы клиентов"** из библиотеки.

### Заголовок секции
- **H2**: "What Our Clients Say"
- **Подзаголовок**: "Real feedback from companies we have helped with Bitrix24"

### Карточки отзывов (3 штуки)

#### Отзыв 1: Sarah Mitchell
- **Аватар**: Инициалы "SM" в круге
- **Рейтинг**: ★★★★★ (5 звезд)
- **Текст**: "They set up our CRM and pipelines in a few weeks. Our team actually uses it every day now. Support is fast and always helpful. The automation they built saves us hours every week."
- **Имя**: "Sarah Mitchell"
- **Должность**: "CEO, TechFlow Solutions"
- **Дата**: "November 2024"

#### Отзыв 2: Marcus Weber
- **Аватар**: Инициалы "MW" в круге
- **Рейтинг**: ★★★★★ (5 звезд)
- **Текст**: "We needed Bitrix24 to match our sales process. They understood our workflow and delivered exactly that. Training was clear and practical. Our sales team adopted it faster than expected."
- **Имя**: "Marcus Weber"
- **Должность**: "Operations Director, European B2B Services"
- **Дата**: "October 2024"

#### Отзыв 3: Elena Rodriguez
- **Аватар**: Инициалы "ER" в круге
- **Рейтинг**: ★★★★★ (5 звезд)
- **Текст**: "From the first call to go-live, everything was on schedule. We now manage leads, deals, and projects in one place. The integration with our ERP system works flawlessly. Highly recommended."
- **Имя**: "Elena Rodriguez"
- **Должность**: "Project Manager, Digital Commerce Group"
- **Дата**: "December 2024"

### Настройки блока
- **Расположение**: 3 колонки на десктопе, 1 колонка на мобильном
- **Стиль карточек**: С тенью, скругленными углами, белый фон
- **Аватары**: Круглые с инициалами или цветным фоном

---

## БЛОК 7: Success Stories (Истории успеха / Кейсы)

### Компонент Bitrix24 Sites
Используйте блок **"Кейсы"** или **"Истории успеха"** из библиотеки. Если такого нет, используйте блок **"Карточки"** с кастомной структурой.

### Заголовок секции
- **H2**: "Success Stories"
- **Подзаголовок**: "Real results from Bitrix24 implementations — metrics, challenges, and outcomes"

### Кейс 1: B2B Services Company

#### Заголовок кейса
"B2B Services Company: From Spreadsheets to Automated CRM"

#### Проблема (Challenge)
"A growing B2B services company with 25 employees was managing leads and deals in spreadsheets and email. Sales reps couldn't track follow-ups, managers had no visibility into pipeline, and closing rates were declining."

#### Решение (What We Did)
"We implemented Bitrix24 Cloud with custom pipelines matching their sales stages, automated lead assignment and follow-up reminders, integrated email and telephony, and set up dashboards for real-time pipeline visibility."

#### Метрики (3 метрики)
1. **45%** - "Increase in closed deals"
2. **60%** - "Reduction in admin time"
3. **3 weeks** - "Time to full adoption"

#### До и После

**Before:**
- Leads tracked in spreadsheets
- No visibility into sales pipeline
- Manual follow-up reminders
- Email and CRM disconnected
- No reporting or analytics

**After:**
- All leads in centralized CRM
- Real-time pipeline dashboards
- Automated follow-up workflows
- Email and calls logged automatically
- Weekly performance reports

### Кейс 2: E-commerce Business

#### Заголовок кейса
"E-commerce Business: Streamlined Operations and Customer Management"

#### Проблема (Challenge)
"An e-commerce company with 40 employees was using separate tools for CRM, project management, and customer support. Customer data was scattered, order tracking was manual, and team communication happened across multiple platforms."

#### Решение (What We Did)
"We deployed Bitrix24 on-premise (EU data center), integrated it with their e-commerce platform via API, created custom workflows for order processing and customer support, unified team communication in one chat, and set up automated customer journey tracking."

#### Метрики (3 метрики)
1. **35%** - "Faster order processing"
2. **50%** - "Improvement in customer satisfaction"
3. **2 months** - "ROI achieved"

#### До и После

**Before:**
- Customer data in 3 different systems
- Manual order status updates
- Support tickets via email only
- Team chat in separate app
- No customer history visibility

**After:**
- Unified customer database
- Automated order status workflows
- Integrated support ticket system
- Team chat and projects in one place
- Complete customer journey tracking

### Настройки блока
- **Расположение**: 1 колонка (полная ширина) или 2 колонки
- **Стиль карточек**: С тенью, скругленными углами, белый фон
- **Метрики**: Выделены крупным шрифтом, цветом #CA2F5D

---

## БЛОК 8: Process (Как мы работаем)

### Компонент Bitrix24 Sites
Используйте блок **"Процесс"** или **"Этапы работы"** из библиотеки. Если нет, используйте блок **"Список с номерами"**.

### Заголовок секции
- **H2**: "How We Work"
- **Подзаголовок**: "A clear path from first contact to a running system and ongoing support"

### Этапы процесса (5 шагов)

#### Шаг 1: Consultation
- **Номер**: 1
- **Заголовок**: "Consultation"
- **Описание**: "We discuss your goals, current tools, and processes. You get a clear picture of what Bitrix24 can do and what we recommend for your case."

#### Шаг 2: Planning
- **Номер**: 2
- **Заголовок**: "Planning"
- **Описание**: "We agree on scope, timelines, and deliverables. You see the plan before we start so there are no surprises."

#### Шаг 3: Implementation
- **Номер**: 3
- **Заголовок**: "Implementation"
- **Описание**: "We set up and customize Bitrix24: data migration, pipelines, automation, and integrations according to the plan."

#### Шаг 4: Training
- **Номер**: 4
- **Заголовок**: "Training"
- **Описание**: "We train your team so they can use the system confidently from day one. Materials and follow-up Q&A are included."

#### Шаг 5: Support
- **Номер**: 5
- **Заголовок**: "Support"
- **Описание**: "After go-live we stay available for questions, fixes, and improvements. You can extend support as your needs grow."

### Настройки блока
- **Расположение**: Горизонтально (5 колонок на десктопе) или вертикально (1 колонка)
- **Номера**: Крупные, выделенные цветом #CA2F5D
- **Стиль**: Соединительные линии между этапами (опционально)

---

## БЛОК 9: Contact (Контакты и форма)

### Компонент Bitrix24 Sites
Используйте блок **"Форма обратной связи"** или **"CRM-форма"** из библиотеки.

### Структура блока (2 колонки)

#### Левая колонка: Контактная информация

##### Заголовок "Why Contact Us?"
Список преимуществ:
- ✓ Free consultation and project assessment
- ✓ Response within 24 hours
- ✓ 8+ years of Bitrix24 expertise
- ✓ Support in English, Spanish, and Russian
- ✓ GDPR-compliant solutions for EU businesses

##### Контактные данные

**Email:**
- Иконка: Конверт (email icon)
- Текст: "Email"
- Ссылка: `mailto:b24@msite.top`
- Значение: "b24@msite.top"

**Phone:**
- Иконка: Телефон (phone icon)
- Текст: "Phone"
- Ссылка: `tel:+34614332785`
- Значение: "+34 614 33 27 85"

#### Правая колонка: Форма обратной связи

### Настройка CRM-формы в Bitrix24

1. **Создайте веб-форму** в разделе CRM → Веб-формы
2. **Добавьте поля**:
   - Имя (Name) - обязательное, текстовое поле
   - Email - обязательное, email поле
   - Телефон (Phone) - текстовое поле
   - Компания (Company) - текстовое поле
   - Сообщение (Message) - многострочное текстовое поле
   - Согласие на обработку данных (GDPR) - чекбокс, обязательное

3. **Настройки формы**:
   - Включите "Создавать лид в CRM" при отправке формы
   - Назначьте ответственного пользователя
   - Настройте уведомления

4. **Вставьте форму на страницу**:
   - Используйте код формы из Bitrix24
   - Или используйте блок "CRM-форма" из конструктора

### Альтернатива: Использование существующей формы
Если у вас уже есть форма Bitrix24, используйте её код:
```html
<script data-b24-form="inline/1/2pvgru" data-skip-moving="true">
(function(w,d,u){
  var s=d.createElement('script');s.async=true;
  s.src=u+'?'+(Date.now()/180000|0);
  var h=d.getElementsByTagName('script')[0];
  h.parentNode.insertBefore(s,h);
})(window,document,'https://cdn.bitrix24.eu/b36594287/crm/form/loader_1.js');
</script>
```

### Настройки блока
- **Расположение**: 2 колонки на десктопе, 1 колонка на мобильном
- **Форма**: Интегрирована с CRM для создания лидов

---

## БЛОК 10: Footer (Подвал сайта)

### Компонент Bitrix24 Sites
Используйте блок **"Подвал сайта"** или **"Footer"** из библиотеки.

### Структура подвала

#### Верхняя часть (3 колонки)

##### Колонка 1: О компании
- **Логотип**: `assets/logo.png` (140x44px)
- **Описание**: "MSITE.TOP — Bitrix24 Silver Partner. We implement, customize, and support Bitrix24 for businesses in the EU and UK. Cloud and on-premise. GDPR-aware."

##### Колонка 2: Services (Ссылки)
- **Заголовок**: "Services"
- **Ссылки**:
  - Installation → `#services`
  - Customization → `#services`
  - Support → `#services`
  - Training → `#services`
  - Integration → `#services`

##### Колонка 3: Company (Ссылки)
- **Заголовок**: "Company"
- **Ссылки**:
  - About Us → `#why-us`
  - Blog → `#blog` (если есть)
  - Contact → `#contact`

##### Колонка 4: Legal (Ссылки)
- **Заголовок**: "Legal"
- **Ссылки**:
  - Privacy Policy → `privacy-policy.html`
  - Terms of Use → `terms.html`
  - GDPR → `gdpr.html`

#### Нижняя часть

##### Бейдж Silver Partner
- **Изображение**: `assets/bitrix24-silver-partner.png`
- **Alt текст**: "Bitrix24 Silver Partner"
- **Позиция**: Слева или по центру

##### Копирайт
- **Текст**: "© 2025 All rights reserved."
- **Позиция**: Справа или по центру

### Настройки блока
- **Фон**: Темный (#000000) или светлый (#f8f8f8)
- **Цвет текста**: Белый (если темный фон) или черный (если светлый фон)
- **Отступы**: Вертикальные отступы для разделения секций

---

## Дополнительные рекомендации

### Изображения и иконки
Все изображения должны быть загружены в медиа-библиотеку Bitrix24 Sites:
- `assets/logo.png` - логотип
- `assets/bitrix24-silver-partner.png` - бейдж партнера
- `assets/icons/installation.svg` - иконка установки
- `assets/icons/customization.svg` - иконка кастомизации
- `assets/icons/support.svg` - иконка поддержки
- `assets/icons/training.svg` - иконка обучения
- `assets/icons/automation.svg` - иконка автоматизации
- `assets/icons/integration.svg` - иконка интеграции
- `assets/icons/development.svg` - иконка разработки

### Адаптивность
- Проверьте отображение всех блоков на мобильных устройствах
- Используйте настройки видимости блоков для разных устройств
- Убедитесь, что меню корректно работает на мобильных

### Якорные ссылки
Все внутренние ссылки должны использовать якоря:
- `#hero` - главный экран
- `#services` - услуги
- `#why-bitrix24` - почему Bitrix24
- `#why-us` - почему мы
- `#testimonials` - отзывы
- `#cases` - кейсы
- `#process` - процесс работы
- `#contact` - контакты

### Интеграция с CRM
- Настройте форму обратной связи для создания лидов в CRM
- Настройте автоматическое назначение ответственного
- Настройте уведомления о новых заявках

---

## Порядок сборки

1. **Настройте общие параметры страницы** (SEO, цвета, шрифты)
2. **Создайте Header** (шапку)
3. **Создайте Hero блок** (главный экран)
4. **Добавьте блок Services** (услуги)
5. **Добавьте блок Why Bitrix24** (преимущества Bitrix24)
6. **Добавьте блок Why Work With Us** (почему мы)
7. **Добавьте блок Testimonials** (отзывы)
8. **Добавьте блок Success Stories** (кейсы)
9. **Добавьте блок Process** (процесс работы)
10. **Добавьте блок Contact** (контакты и форма)
11. **Создайте Footer** (подвал)
12. **Проверьте адаптивность** на всех устройствах
13. **Протестируйте все ссылки** и формы

---

## Примечания

- Если какой-то блок отсутствует в библиотеке Bitrix24 Sites, используйте ближайший аналог и настройте его
- Для сложных блоков (кейсы) может потребоваться кастомизация через HTML/CSS
- Все тексты можно скопировать из файла `index.html`
- Проверьте работу формы обратной связи перед публикацией сайта
