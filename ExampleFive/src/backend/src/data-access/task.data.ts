import { Request, Response } from 'express';

interface Task {
    id: number,
    name: string,
    statement: string
}

class TaskData {

    private tasks: Task[] = [];

    constructor() {
        this.init();
    }

    getTasks(req: Request, res: Response): void {
        res.status(200).send(this.tasks);
    }

    getTaskById(req: Request, res: Response): void {
        const { id } = req.query;

        const task: Task | undefined = this.tasks.find(task => task.id === Number(id));

        if (task) {
            res.json({ message: 'Task encontrada', task: task });
        } else {
            res.status(404).json({ message: 'Task no encontrada' });
        }
    }

    createTask(req: Request, res: Response): void {
        const { name, statement } = req.query;

        const existingIds = this.tasks.map(task => task.id);
        let newId = 1;

        while (existingIds.includes(newId)) {
            newId++;
        }

        const newTask: Task = {
            id: Number(newId),
            name: String(name),
            statement: String(statement)
        };

        this.tasks.push(newTask);

        res.status(201).json({ message: 'Task creada correctamente', tasks: this.tasks });
    }

    updateTask(req: Request, res: Response): void {
        const { id, name, statement } = req.query;

        const taskToUpdate: Task | undefined = this.tasks.find(task => task.id === Number(id));

        if (taskToUpdate) {
            taskToUpdate.name = String(name);
            taskToUpdate.statement = String(statement);

            res.json({ message: 'Task actualizada correctamente', tasks: this.tasks });
        } else {
            res.status(404).json({ message: 'Task no encontrada' });
        }
    }

    deleteTask(req: Request, res: Response): void {
        const { id } = req.query;

        const taskIndex: number = this.tasks.findIndex(task => task.id === Number(id));

        if (taskIndex !== -1) {
            const deletedTask: Task = this.tasks.splice(taskIndex, 1)[0];
            res.json({ message: 'Task eliminada correctamente', task: deletedTask, tasks: this.tasks });
        } else {
            res.status(404).json({ message: 'Task no encontrada' });
        }
    }

    init() {
        this.tasks.push({
            id: 1,
            name: "Comprar víveres",
            statement: "Ir al supermercado y comprar los víveres necesarios para la semana."
        });

        this.tasks.push({
            id: 2,
            name: "Hacer ejercicio",
            statement: "Realizar una rutina de ejercicios durante 30 minutos."
        });

        this.tasks.push({
            id: 3,
            name: "Llamar a mamá",
            statement: "Hacer una llamada a mi mamá para ponerme al día con ella."
        });
    }
}

export default TaskData;
