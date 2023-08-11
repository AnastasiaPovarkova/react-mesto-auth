# Проект Mesto на Реакте с авторизацией и регистрацией

#### Статус: сделано :white_check_mark:

<a href="https://anastasiapovarkova.github.io/react-mesto-auth" target="_blank">
    <img src="https://github.com/AnastasiaPovarkova/react-mesto-auth/blob/main/src/images/screensaverr.png?raw=true" width="900" title="Mesto React with Auth" alt="Mesto React with Auth"/>
</a>

## На этом сайте пользватель может:

    Зарегистрироваться под любым мейлом (даже выдуманным)
    Редактировать свой профиль (аватар, ник, род деятельности)
    Добавлять и удалять фотографии из путешествий
    Лайкать и анлайкать карточки
    Открывать и просматривать фотокарточки

____


## Технологии

Технологии, использованные в проекте

### JSX

### React

Использованы хуки use.State и use.Effect. Прописан UserContext. Всплывающие уведомления при успешной регистрации или ошибке регистрации и логина.

### react-router-dom

HashRouter, Routes, Route, Link, useNavigate, Navigate. Роут главной страницы защищен ProtectedRoute.

### REST API

Работа с сервером для получения данных пользователя и отображения карточек студентов.

### Authorization

Все запросы на авторизацию, регистрацию и проверку токена работают через сервис `https://auth.nomoreparties.co`.

## Команды для сборки и запуска проекта

В папке проекта вы можете запустить команды:

### `npm start`

Запустить проект в режиме разработки.
Страничка будет автоматически обновляться при изменении кода, ошибки отслеживаются в консоли.
Адрес страницы: http://localhost:3000/

### `npm run build`

Скрипт сгенерирует оптимизированную сборку проекта. Внутри проекта появится новая папка `build`. Внутри `build/static` можно найти оптимизированные версии всего написанного кода, наряду с другими ресурсами: JS, CSS и шрифтами. 

### `npm run deploy`

Размещение проекта на сервере. В команде уже прописан predeploy: build.

## Ссылка на GitHub Pages: [Mesto React with Auth](https://anastasiapovarkova.github.io/react-mesto-auth/)
