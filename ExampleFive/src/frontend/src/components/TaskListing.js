import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TaskListing = () => {
    const apiUrl = "http://localhost:3000";
    const [taskData, setTaskData] = useState(null);
    const navigate = useNavigate();

    const LoadEditTask = (id) => {
        navigate("/task/edit/" + id);
    }
    
    const RemoveTask = (id) => {
        if (window.confirm('Deseas eliminar esta tarea?')) {
            fetch(`${apiUrl}/deleteTask?id=` + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Eliminada correctamente.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch(`${apiUrl}/getTasks`).then((res) => {
            return res.json();
        }).then((resp) => {
            setTaskData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Tareas</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="task/create" className="btn btn-success">Crear (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Título</td>
                                <td>Descripción</td>
                            </tr>
                        </thead>
                        <tbody>

                            {taskData &&
                                taskData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.statement}</td>
                                        <td>
                                            <button onClick={() => { LoadEditTask(item.id) }} className="btn btn-success">Editar</button>
                                            <button onClick={() => { RemoveTask(item.id) }} className="btn btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default TaskListing;