const express = require('express');
const helmet = require('helmet'); // модуль для простановки заголовков безопасности
const cookieParser = require('cookie-parser'); // для работы с куками
const morgan = require('morgan'); // для логов
const mongoose = require('mongoose'); // для работы с базой данных
const bodyParser = require('body-parser'); // подключили body-parser
const { errors } = require('celebrate'); // обработчик ошибок celebrate
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4000',
  credentials: true,

}
const limiter = require('./modules/rate-limiter'); // подключили ограничение зколичества запросов
const { PORT, DB_ADR } = require('./config.js'); //  в этом файле временная база данных в формате json
const router = require('./routes/index'); // подключаем глобальный роутер
const { requestLogger, errorLogger } = require('./middlewares/logger'); // модули логгирования в файл
const errorMiddleware = require('./middlewares/error.js'); // централизованный обработчик ошибок
const messages = require('./modules/text-constants');

const app = express(); // запускаем приложение на express

app.use(cookieParser()); // подключаем парсер кук как мидлвэр
app.use(limiter); // ограничение на количество запросов
app.use(helmet()); // подключаем заголовки безопасности

// разрешили все кросс-доменные запросы
app.use(cors(corsOptions));

// подключаем body-parser как мидлвару всего приложения
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// подключаемся к серверу mongo, mestodb - название бд
mongoose.connect(DB_ADR, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
// логгирование в командной строке
app.use(morgan('combined'));
// подключаем логгер запросов в файл
app.use(requestLogger);
// для краш-теста сервера (удалить после ревью)
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error(messages.serverIsDown);
  }, 0);
});

//app.options('*', cors())
app.use(router);

// подключаем логгер ошибок в файл
app.use(errorLogger);

// обработчики ошибок
app.use(errors()); // обработчик ошибок celebrate

// наш централизованный обработчик ошибок
app.use(errorMiddleware);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`${messages.appIsActiv} ${PORT}`);
});
