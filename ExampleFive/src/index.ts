import express, { Request, Response, NextFunction } from 'express';
import { routesConfig } from './routes/routes.config';

const app = express();

app.use(function (req: Request, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(express.json());
routesConfig(app);

app.listen(3000, function () {
    console.log('app listening at port %s', 3000);
});
