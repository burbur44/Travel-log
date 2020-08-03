const notfound = (req, res, next)=>{
    const error = new Error('not found - ${req.originalUrl} ');
    res.status(404);
    next(error);
    };


const errorHandler =(error, req, res, next) =>{
        const statusCode = res.statusCode === 200 ? 500 :res.statusCode;
        res.status(statusCode);
        res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production'? 'no no no' : error.stack,
        })
        };

    module.exports = {
         notfound,
        errorHandler,
    };