require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const router = require('./routes/index');
const sequelize = require('./db');
const models = require('./models/models');
const errorHendler = require('./middleware/ErrorHandingMiddleware');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHendler);

const startServer = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => { console.log(`http://localhost:${PORT}`); });

    } catch(err){
        console.error(err);
    }
};

startServer();