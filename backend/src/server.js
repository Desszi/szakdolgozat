const express = require('express');
const config = require('config');
const logger = require('./config/logger');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Authenctication.
const authenticateJwt = require('./auth/authenticate');
const adminOnly = require('./auth/adminOnly');
const authHandler = require('./auth/authHandler');

const swaggerDocument = YAML.load('./docs/swager.yaml');

const { username, password, host } = config.get('database');
mongoose
    .connect(`mongodb://${host}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => logger.info('MongoDB connection has been established successfully.'))
    .catch( err => {
        logger.error(err);
        process.exit();
    });

app.use(morgan('combined', {stream: logger.stream}));
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);

app.use('/bill', authenticateJwt, require('./controllers/bill/bill.routes'));
app.use('/customer', authenticateJwt, require('./controllers/customer/customer.routes'));
app.use('/order', authenticateJwt, require('./controllers/order/order.routes'));
app.use('/product', authenticateJwt, require('./controllers/product/product.routes'));
app.use('/saller', authenticateJwt, require('./controllers/saller/saller.routes'));
app.use('/storage', authenticateJwt, require('./controllers/storage/storage.routes'));
app.use('/transport', authenticateJwt, require('./controllers/transport/transport.routes'));
app.use('/post', authenticateJwt, adminOnly, require('./controllers/post/post.routes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use( (err, req, res, next) => {
    res.status(err.statusCode);
    res.json({
        hasError: true,
        message: err.message
    });
});

module.exports = app;
