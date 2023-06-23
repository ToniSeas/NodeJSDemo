import express from 'express';
import TaskBusiness from '../business/task.business';
import bodyParser from 'body-parser';

class Router {
    private taskBusiness: TaskBusiness;

    constructor() {
        this.taskBusiness = new TaskBusiness();
    }

    config(app: express.Application): void {
        app.use(bodyParser.json());

        app.get('/getTasks', [
            this.taskBusiness.getTasks.bind(this.taskBusiness)
        ]);
        app.get('/getTaskById', [
            this.taskBusiness.getTaskById.bind(this.taskBusiness)
        ]);
        app.post('/createTask', [
            this.taskBusiness.createTask.bind(this.taskBusiness)
        ]);
        app.put('/updateTask', [
            this.taskBusiness.updateTask.bind(this.taskBusiness)
        ]);
        app.delete('/deleteTask', [
            this.taskBusiness.deleteTask.bind(this.taskBusiness)
        ]);
    }
}

export default Router;