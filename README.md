# Mesto-React-Auth - проект Mesto на Реакте с авторизацией и регистрацией

Проект-персональная страничка, где вы можете зарегистрироваться, выбрать ник, фото и род деятельности, а затем делиться фотографиями ваших любимых мест для путешествий, лайкать и просматривать фото. Проект написан на React.

## Технологии

Технологии, использованные в проекте

### JSX

### React

Использованы хуки use.State и use.Effect. Прописан UserContext. Всплывающие уведомления при успешной регистрации или ошибке регистрации и входа.

### react-router-dom

HashRouter, Routes, Route, Link, useNavigate, Navigate. Роут главной страницы защищен ProtectedRoute.

### Api

Работа с сервером для получения данных пользователя и отображения карточек студентов.

### Authorization

Все запросы на авторизацию, регистрацию и проверку токена работают через сервис `https://auth.nomoreparties.co`.

## Команды для сборки и запуска проекта

В папке проекта вы можете запустить команды:

### `npm start`

Запустить проект в режиме разработки.
Страничка будет автоматически обновляться при изменении кода, ошибки отслеживаются в консоли.
Адрес страницы: http://localhost:3000/

### `npm test`

Запускает тестовый прогон в режиме интерактивного просмотра.

### `npm run build`

Скрипт сгенерирует оптимизированную сборку проекта. Внутри проекта появится новая папка `build`. Внутри `build/static` можно найти оптимизированные версии всего написанного кода, наряду с другими ресурсами: JS, CSS и шрифтами. 

### `npm run deploy`

Размещение проекта на сервере. В команде уже прописан predeploy: build.

## GH Pages

### [Ссылка на GitHub Pages](https://anastasiapovarkova.github.io/react-mesto-auth/)