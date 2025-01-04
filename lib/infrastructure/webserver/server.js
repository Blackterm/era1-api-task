
express = require("express");
app = express();

app.use(express.json());
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
// parse application/json
app.use(bodyParser.json({ limit: '10mb' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authorization = require('../../interfaces/routes/authorization');
const port = 4000;

const serviceLocator = require('../../infrastructure/config/service-locator');
const TokenControl = require('../../interfaces/controllers/AuthorizationController');
app.locals.serviceLocator = serviceLocator;

const createServer = async () => {


    const server = app.listen(port, () => {
        console.log('Server is running on port 4000');
    });

    app.use(async (req, res, next) => {
        if (req.path === '/login' || req.path === '/signin' || req.path === '/logout') {
            return next();
        }
        var response = await TokenControl.verifyAccessToken(req, res);
        if (response) {
            return next();
        } else {
            return res.status(401).json({
                status: 'fail',
                message: 'Missing or wrong Authorization request header'
            });
        }
    });


    app.use('/', authorization);

    return server;
};

module.exports = createServer;