const express = require ('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');


const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: 'https//localhost:3000'
}));

app.get('/', (req, res) =>{
    res.json({
        message: 'hello world',
    })
})

app.use((req, res, next)=>{
const error = new Error('not found - ${req.originalUrl} ');
res.status(404);
next(error);
});

app.use((error, req, res, next) =>{
const statusCode = res.statusCode === 200 ? 500 :res.statusCode;
res.status(statusCode);
res.json({
message: error.message,
stack: process.env.NODE_ENV === 'production'? 'no no no' : error.stack,
})
});

const port =  1337;


app.listen(port, () =>{
    console.log('listening at https://localhost:1337');

});