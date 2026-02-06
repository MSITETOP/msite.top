# MSITE.TOP — Nuxt 3

Сайт собран из вёрстки `i.html` на Nuxt 3 с i18n (EN/ES).

## Перед первым запуском

Скопируйте стили и ассеты из корня проекта в приложение Nuxt:

```bash
# из корня репозитория (msite.top)
cp styles.css nuxt-app/  # уже подключён через nuxt.config как ../styles.css
mkdir -p nuxt-app/public/assets
cp -r assets/* nuxt-app/public/assets/
```

Либо из папки `nuxt-app`:

```bash
mkdir -p public/assets
cp -r ../assets/* public/assets/
```

## Установка и запуск

```bash
cd nuxt-app
npm install
npm run dev
```

Откройте http://localhost:3000 (EN) и http://localhost:3000/es (ES).

## Сборка

```bash
npm run build
npm run preview  # предпросмотр production
```

## Структура

- `components/` — секции страницы (Hero, Services, Contact и т.д.) и шапка/подвал
- `layouts/default.vue` — общий layout с Header и Footer
- `pages/index.vue` — главная (все секции)
- `locales/en.json`, `locales/es.json` — тексты для i18n
- Стили подключаются из корня: `../styles.css`
- Форма контакта — Bitrix24 (скрипт подгружается на клиенте в `BitrixForm.vue`)

## Роуты

- `/` — главная (EN)
- `/es` — главная (ES)
- Страницы `/privacy-policy`, `/terms`, `/gdpr` можно добавить по аналогии с `pages/index.vue`.
