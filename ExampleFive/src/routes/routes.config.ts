import express from 'express';
import { list } from '../business/task.business';

export function routesConfig(app: express.Application): void {
    app.get('/users', [
        list
    ]);
}
