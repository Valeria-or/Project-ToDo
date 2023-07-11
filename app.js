const express = require('express');
const morgan = require('morgan');
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const path = require('path');

const indexRoutes = require('./src/routes/indexRoutes');
const regRoutes = require('./src/routes/regRoutes');
const loginRoutes = require('./src/routes/loginRoutes');

const app = express();

const sessionConfig = {
    name: 'ToDo-Project',
    store: new FileStore(),
    secret: process.env.SESSION_SECRET ?? 'Секретное слово',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 9999999,
      httpOnly: true,
    },
  };

const PORT = 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(session(sessionConfig));

app.use("/", indexRoutes)
app.use("/registration", regRoutes)
app.use("/login", loginRoutes)

app.listen(PORT, () => {
    console.log("Сервер успешно запущен :3")
})