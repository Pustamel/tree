# trees

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```


##  <a href="structure">Структура проекта</a>

```text
├── src
    ├── app                                          # Содержит настройки и глобальные провайдеры.
        ├── api                                      # Запросы.
            ├── index.ts                             # Глобальная настройка axios.
            └── types.ts                             # Типизация запросов.
        ├── providers                                # Глобальные провайдеры.
            └── localization                         # Локализация. Пока что только русский язык.
    ├── assets                                       # Глобальные ассеты.
    ├── config                                       # Конфигурация.
    ├── features                                     # Самостоятельные фичи.
    ├── pages                                        # Страницы/модули
    ├── router
        ├── authorized.ts                            # Авторизованные роуты.
        ├── index.ts                                 # Конфигурация роутов.
        └── public.ts                                # Публичные роуты.
    ├── shared                                       # То, что можно переносить из проекта в проект.
        ├── composables                              # Фичи по Vue.
        ├── entities                                 # Переиспользование по сущностям. 
        ├── helpers                                  # Вспомогательные функции.
        └── UI                                       # UI-компоненты.
    ├── stores                                       # Хранилище.
        ├── index.tx                                 # Setup.
    ├── types                                        # Общая типизация.
        └── router.d.ts                              # Роутинг. Обход ошибок.
    ├── views                                        # Обертки.

    ├── App.vue                                      # Корень.
    ├── main.ts                                      # Главный ts файл, настройки.
    ├── quasar-variables.sass                        # Переменные для Quasar. Доступны глобально.
    └── types.d.ts                                   # Типизация. Файлы.
├── public                                           # Публичный. Содержит robot.txt
```

# <a href="rules">Правила разработки</a>
## GIT
```text
Все ветки создаются от slave.
Наименование коммита: 
feat: (MUST) create function
пустая строка
# описание(опционально)
где, create function - короткое название коммита
|
где может быть тип: feat, fix, bc (breaking-change), chore
feat - новый функционал/фича.
bc - глобальный изменения (не совместимые с предыдущей версией) может включать несколько файлов.
chore - не важное изменение, например: форматирование кода, добавление readme, удаление лишнего кода или комментов
|
Наименование ветки:
{модуль}/{тип}/{название}
user/feat/add-profile-page
тип может быть: feat, fix, bc
название ветки после второго слеша начинается с: add, delete, edit
|
(MUST/MAY/MAY NOT) - модификаторы к feat:
MUST - обязательное. Необходимое для нормальной работы проекта. Например, авторизация, подключение библиотек.
MAY - возможное. Изменения, которые могут улучшить проект, но не являются критически важными. 
MAY NOT - не обязательно. Указывает на то, что изменение или действие, описанное в коммите, явно запрещено или не рекомендуется. Проще говоря, костыль.Пример: MAY NOT remove error handling
Описание: Этот коммит добавляет или уточняет, что удаление обработки ошибок запрещено, возможно, путём добавления комментариев в коде или внесения изменений в тесты, чтобы убедиться, что обработка ошибок остаётся.

Модификаторы являются не обязательными.
```

## Архитектура

```text
 подход FSD(https://feature-sliced.design/ru/docs/get-started/overview).
 Верхние компоненты могут использовать только нижние, не наоборот!
Не должно быть больших компонентов на 1000+ строк. Дробление - обязательно.

app - содержит разные настройки, providers, глобальные стили, роутинг, стор. 
pages - страницы. Сегменты к каждой странице: mixins, common (содержит в себе константы и функции), styles, assets(иконки), api, components
components - содержит компоненты для страницы
корневой компонент самой страницы это index.vue
остальное - разбросано по папкам
ничего, кроме самой страницы(index.vue) не должно быть импортировано из папки
|
widgets - содержит в себе самостоятельные виджеты. 
скелет какого-то интерфейса без бизнес логики. Со слотами (<slot>).
Например, карточка публикации. Она уже содержит в себе кнопки, карточку, стили, но не имеет логики. 
|
features - какие-то общие, готовые переиспользуемые фичи..
Сюда могут относится посты ( в соц сетях), режим просмотра фотографий, изменить файл, создать пост. Может содержать бизнес логику.
|
shared - содержит в себе UI, utils, vue (например, директивы и eventBus), helpers, const. Без бизнес логики. То, что можно переносить из проекта в проект.
UI - кнопки, инпуты и прочее. Желательно без логики. Если есть, то минимальная. 
utils - различные переисп. функции
helpers - вспомогательные функции, например для работы с браузером
const - переисп. константы для всего проекта
||
папки(имена) для сегментов(для любого слоя): 
UI, components, api, helpers + другие при необходимости 
```
