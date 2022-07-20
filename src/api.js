const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
const userRouter = require('./routes/user.router');
const loginRouter = require('./routes/login.router');
const categoryRouter = require('./routes/category.router');
const blogPostRouter = require('./routes/blogpost.router');

// ...

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.use('/categories', categoryRouter);

app.use('/post', blogPostRouter);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
