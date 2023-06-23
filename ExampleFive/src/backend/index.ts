import express, { Request, Response, NextFunction } from 'express';
import Router from './routes/routes.config'

const app = express();

app.use(function (req: Request, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(express.json());
const router = new Router();
router.config(app);

app.listen(3000, function () {
    console.log('app listening at port %s', 3000);
});
