const express = require ('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares');
const logs  = require('./api/logs');


mongoose.connect('mongodb://localhost:27017/travel-log', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: 'process.env.CORS_ORIGIN'
}));

app.use(express.json());

app.get('/', (req, res) =>{
    res.json({
        message: 'hello world',
    })
})

app.use('/api/logs',logs);


app.use(middlewares.notfound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;


app.listen(port, () =>{
    console.log('listening at http://localhost:1337');

}); 