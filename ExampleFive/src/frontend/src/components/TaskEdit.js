import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const TaskEdit = () => {
    const apiUrl = "http://localhost:3000";
    const param = useParams('param');

    useEffect(() => {
        fetch(`${apiUrl}/getTaskById?id=${param.taskid}`).then((res) => {
            return res.json();
        }).then((resp) => {
            const task = resp.task;
            setId(task.id);
            setName(task.name);
            setStatement(task.statement);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [statement, setStatement] = useState("");
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();

        fetch(`${apiUrl}/updateTask?id=${id}&name=${name}&statement=${statement}`, {
            method: "PUT",
            headers: { "content-type": "application/json" }
        }).then((res) => {
            alert('Actualizada correctamente')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Editar tarea</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Título</label>
                                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => setName(e.target.value)} className="form-control"></input>
                                            {name.length === 0 && validation && <span className="text-danger">Ingrese el título</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-1">
                                        <div className="form-group">
                                            <label>Descripción</label>
                                            <input value={statement} onChange={e => setStatement(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Guardar</button>
                                            <Link to="/" className="btn btn-danger">Cancelar</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default TaskEdit;