import { Request, Response } from 'express';
import TaskData from '../data-access/task.data';

class TaskBusiness {

    private taskData: TaskData;

    constructor() {
        this.taskData = new TaskData();
    }

    getTasks(req: Request, res: Response): void {
        this.taskData.getTasks(req, res);
    }

    getTaskById(req: Request, res: Response): void {
        this.taskData.getTaskById(req, res);
    }

    createTask(req: Request, res: Response): void {
        this.taskData.createTask(req, res);
    }

    updateTask(req: Request, res: Response): void {
        this.taskData.updateTask(req, res);
    }

    deleteTask(req: Request, res: Response): void {
        this.taskData.deleteTask(req, res);
    }
}

export default TaskBusiness;