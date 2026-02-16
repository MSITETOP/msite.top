# БЛОК 1: Header (Шапка сайта) - Детальная инструкция

## Вариант 1: Использование готового блока Bitrix24 Sites

### Шаг 1: Добавление блока
1. В конструкторе Bitrix24 Sites найдите блок **"Шапка сайта"** или **"Header"** в библиотеке блоков
2. Перетащите блок на страницу (обычно он добавляется автоматически в верхнюю часть)

### Шаг 2: Настройка логотипа
1. Кликните на область логотипа
2. Загрузите изображение: `assets/logo.png`
3. Установите размер: **140x44px**
4. Добавьте Alt текст: **"MSITE.TOP"**
5. Установите ссылку: на главную страницу или якорь `#hero`

### Шаг 3: Настройка меню
1. Кликните на область меню
2. Создайте пункты меню:
   - **Services** → ссылка: `#services`
   - **Why Bitrix24** → ссылка: `#why-bitrix24`
   - **About Us** → ссылка: `#why-us`
   - **How We Work** → ссылка: `#process`
   - **Contact** → ссылка: `#contact`

### Шаг 4: Добавление переключателя языка
1. Добавьте блок **"Кнопки"** или **"Текст"**
2. Создайте две кнопки:
   - **EN** (активная) → ссылка на главную страницу
   - **ES** → ссылка на испанскую версию
3. Настройте стиль: фон #f5f5f5, активная кнопка белая с тенью

### Шаг 5: Добавление CTA кнопки
1. Добавьте блок **"Кнопка"**
2. Текст: **"Request Demo"**
3. Цвет фона: **#CA2F5D**
4. Цвет текста: **белый**
5. Ссылка: `#contact`

### Шаг 6: Настройка позиционирования
1. В настройках блока включите **"Закрепить сверху"** (sticky header)
2. Установите фон: **белый (#ffffff)**
3. Добавьте нижнюю границу: **1px solid #e5e5e5**

---

## Вариант 2: Кастомный HTML блок (если нужен точный дизайн)

Если готовый блок не подходит, используйте блок **"HTML код"** или **"Кастомный HTML"** в Bitrix24 Sites.

### HTML структура

```html
<header class="msite-header" style="position: sticky; top: 0; z-index: 100; background: #ffffff; border-bottom: 1px solid #e5e5e5;">
  <div style="max-width: 1120px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; min-height: 64px; gap: 24px;">
    
    <!-- Логотип -->
    <a href="#hero" style="flex-shrink: 0;">
      <img src="assets/logo.png" alt="MSITE.TOP" style="width: 140px; height: 44px; object-fit: contain;">
    </a>
    
    <!-- Навигация -->
    <nav style="flex: 1; display: flex; align-items: center; gap: 32px;">
      <ul style="display: flex; align-items: center; gap: 32px; list-style: none; margin: 0; padding: 0;">
        <li><a href="#services" style="color: #000000; font-weight: 500; text-decoration: none; font-family: 'Inter', sans-serif;">Services</a></li>
        <li><a href="#why-bitrix24" style="color: #000000; font-weight: 500; text-decoration: none; font-family: 'Inter', sans-serif;">Why Bitrix24</a></li>
        <li><a href="#why-us" style="color: #000000; font-weight: 500; text-decoration: none; font-family: 'Inter', sans-serif;">About Us</a></li>
        <li><a href="#process" style="color: #000000; font-weight: 500; text-decoration: none; font-family: 'Inter', sans-serif;">How We Work</a></li>
        <li><a href="#contact" style="color: #000000; font-weight: 500; text-decoration: none; font-family: 'Inter', sans-serif;">Contact</a></li>
      </ul>
    </nav>
    
    <!-- Правая часть: переключатель языка и кнопка -->
    <div style="display: flex; align-items: center; gap: 16px; flex-shrink: 0;">
      <!-- Переключатель языка -->
      <div style="display: inline-flex; align-items: center; gap: 0; font-size: 14px; font-weight: 500; background: #f5f5f5; border-radius: 12px; padding: 2px;">
        <a href="index.html" style="display: inline-flex; align-items: center; justify-content: center; padding: 2px 6px; color: #CA2F5D; text-decoration: none; border-radius: 10px; min-width: 40px; background: #fff; font-weight: 600; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">EN</a>
        <a href="index-es.html" style="display: inline-flex; align-items: center; justify-content: center; padding: 2px 6px; color: #000000; text-decoration: none; border-radius: 10px; min-width: 40px; background: transparent;">ES</a>
      </div>
      
      <!-- CTA кнопка -->
      <a href="#contact" style="display: inline-flex; align-items: center; justify-content: center; padding: 8px 24px; background: #CA2F5D; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 500; font-family: 'Inter', sans-serif; transition: background 0.2s;">Request Demo</a>
    </div>
    
  </div>
</header>
```

### CSS стили (добавьте в настройки страницы или в блок стилей)

```css
.msite-header a:hover {
  color: #CA2F5D;
  text-decoration: none;
}

.msite-header nav a:hover {
  color: #CA2F5D;
}

.msite-header .lang-switcher a:hover {
  background: rgba(0, 0, 0, 0.05);
}

.msite-header .cta-button:hover {
  background: #a8264b;
}

/* Мобильная версия */
@media (max-width: 768px) {
  .msite-header nav {
    display: none;
  }
  
  .msite-header .lang-switcher {
    display: none;
  }
  
  /* Добавьте гамбургер-меню для мобильных */
}
```

---

## Вариант 3: Пошаговая сборка из отдельных блоков

### Шаг 1: Создайте контейнер
1. Добавьте блок **"Контейнер"** или **"Строка"**
2. Настройте: максимальная ширина 1120px, центрирование, отступы по бокам 24px
3. Установите flex-расположение: горизонтальное, выравнивание по центру

### Шаг 2: Добавьте логотип
1. Добавьте блок **"Изображение"** в левую часть контейнера
2. Загрузите `assets/logo.png`
3. Размер: 140x44px
4. Ссылка: `#hero`

### Шаг 3: Добавьте меню
1. Добавьте блок **"Меню"** в центральную часть
2. Создайте пункты меню (см. выше)
3. Стиль: горизонтальное меню, отступы между пунктами 32px

### Шаг 4: Добавьте переключатель языка
1. Добавьте блок **"Кнопки"** в правую часть
2. Создайте две кнопки: EN и ES
3. Стиль: фон #f5f5f5, активная кнопка белая с тенью

### Шаг 5: Добавьте CTA кнопку
1. Добавьте блок **"Кнопка"** рядом с переключателем языка
2. Текст: "Request Demo"
3. Цвет: #CA2F5D

### Шаг 6: Настройте закрепление
1. В настройках всего блока Header включите **"Закрепить сверху"**
2. Установите z-index: 100
3. Фон: белый
4. Нижняя граница: 1px solid #e5e5e5

---

## Мобильная версия

### Настройка адаптивности
1. В настройках блока Header включите **"Адаптивный режим"**
2. Для экранов < 768px:
   - Скрыть меню навигации
   - Показать гамбургер-меню (иконка из 3 линий)
   - Переместить переключатель языка и кнопку в мобильное меню

### Гамбургер-меню (если используете кастомный HTML)

Добавьте перед закрывающим тегом header:

```html
<!-- Гамбургер для мобильных -->
<input type="checkbox" id="mobile-menu-toggle" style="display: none;">
<label for="mobile-menu-toggle" style="display: none; flex-direction: column; gap: 5px; width: 40px; height: 40px; padding: 8px; cursor: pointer;">
  <span style="display: block; width: 100%; height: 2px; background: #000;"></span>
  <span style="display: block; width: 100%; height: 2px; background: #000;"></span>
  <span style="display: block; width: 100%; height: 2px; background: #000;"></span>
</label>

<style>
@media (max-width: 768px) {
  .msite-header nav { display: none; }
  .msite-header .lang-switcher { display: none; }
  label[for="mobile-menu-toggle"] { display: flex; }
  
  #mobile-menu-toggle:checked ~ nav {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    padding: 16px;
  }
}
</style>
```

---

## Чек-лист готовности блока

- [ ] Логотип загружен и отображается корректно
- [ ] Все пункты меню созданы и ссылаются на правильные якоря
- [ ] Переключатель языка работает (EN активен)
- [ ] Кнопка "Request Demo" имеет правильный цвет (#CA2F5D)
- [ ] Header закреплен сверху (sticky)
- [ ] На мобильных устройствах отображается гамбургер-меню
- [ ] Все ссылки работают корректно
- [ ] Фон белый, есть нижняя граница
- [ ] Отступы и выравнивание корректны

---

## Полезные советы

1. **Если логотип не отображается**: Проверьте путь к файлу. В Bitrix24 Sites используйте полный URL или загрузите изображение через медиа-библиотеку.

2. **Если меню не работает**: Убедитесь, что якоря (`#services`, `#contact` и т.д.) соответствуют ID блоков на странице.

3. **Если переключатель языка не работает**: Проверьте, что у вас созданы обе версии страницы (английская и испанская).

4. **Для точного соответствия дизайну**: Используйте кастомный HTML блок (Вариант 2) и настройте стили вручную.

5. **Тестирование**: Обязательно проверьте Header на разных устройствах перед публикацией.

---

## Следующий шаг

После создания Header переходите к [БЛОК 2: Hero (Главный экран)](BLOCK_02_HERO.md)
