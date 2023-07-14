const express = require('express');
const morgan = require('morgan');
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const path = require('path');

const indexRoutes = require('./src/routes/indexRoutes');
const regRoutes = require('./src/routes/regRoutes');
const loginRoutes = require('./src/routes/loginRoutes');
const homeRoutes = require('./src/routes/homeRoutes');
const deckRoutes = require('./src/routes/deckRouter');
const listRoutes = require('./src/routes/listRoutes');
const trackerRoutes = require('./src/routes/trackerRouter');
const calendarRoutes = require('./src/routes/calendarRoutes');
const profileRoutes = require('./src/routes/profileRoutes');

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
app.use("/home", homeRoutes)
app.use("/deck", deckRoutes)
app.use("/list", listRoutes)
app.use("/tracker", trackerRoutes)
app.use("/calendar", calendarRoutes)
app.use("/profile", profileRoutes)

app.listen(PORT, () => {
    console.log("Сервер успешно запущен :3")
})