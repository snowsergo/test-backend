# Сервер для личного кабинета пользователя телеком компании

## Функционол
- создание пользователяс подтверждением по email
- авторизация пользователя по email и password
- изменение логина, пароля
- выдача информации из базы данных
(вместо базы используюся файлы в папке constants  bill.js  calls.js  lines.js)
- запросы можно проверить в postman по адресу http://localhost:3000 в dev режиме

## Установка проекта

Скопируйте проект на компьютер:

```
git clone https://github.com/snowsergo/test-backend.git
```

Установите зависимости проекта:

```
npm i
```

## Работа

Режим development:
Сборка для сервера c hot-reload (nodemon)

```
npm run dev
```

Режим development:
Сборка для сервера без hot-reload

```
npm run start
```

Отправляйте запросы вида:

```
http://localhost:3000/signup (POST)
http://localhost:3000/signin (POST)
http://localhost:3000/email/:email (POST)
http://localhost:3000/update (PATCH)
http://localhost:3000/users/me (GET)


http://localhost:3000/lines (GET)
http://localhost:3000/calls (GET)
http://localhost:3000/bills (GET)


```

