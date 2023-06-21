import { Request, Response } from 'express';

export function list(req: Request, res: Response): void {
    let result: string = 'hola a todos';
    res.status(200).send(result);
}