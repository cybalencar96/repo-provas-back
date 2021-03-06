import { ErrorRequestHandler } from 'express';
import { HttpStatusCode } from '../enums/httpStatusCode';

const serverErrorMiddleware: ErrorRequestHandler = async (err, req, res, next) => {
    if (err.name === 'SyntaxError') {
        return res.status(HttpStatusCode.BAD_REQUEST).send('JSON object error');
    }
    
    if (err.name === 'UploadError') {
        return res.status(HttpStatusCode.BAD_REQUEST).send(err.message);
    }

    console.log(err);
    res.sendStatus(500);
}

export {
    serverErrorMiddleware,
}