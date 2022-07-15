const express = require('express');
const userRouter = require('./routes/user.router');
const loginRouter = require('./routes/login.router');
const categoryRouter = require('./routes/category.router');

// ...

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.use('/categories', categoryRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
