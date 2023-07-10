import React, { Fragment, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Todoitem } from "./Todoitem";
import { v4 as uuid } from "uuid";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const tareaRef = useRef();

  

  const agregarTarea = (src:"") => {
    const tarea = tareaRef.current.value.trim();

    if (tarea !== "") {
      const tareaExistente = todos.find((todo) => todo.tarea.toLowerCase() === tarea.toLowerCase());
      if (tareaExistente) {
        setError("¡La tarea ya existe!");
        return;
      }

      const id = uuid();
      const nuevaTarea = {
        id: id,
        tarea: tarea
      };

      setTodos((prevTodos) => [...prevTodos, nuevaTarea]);
      tareaRef.current.value = "";
      setError("");
    } else {
      setError("¡Por favor, ingrese una tarea!");
    }
  };

  const eliminarTarea = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleCompletado = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completada: !todo.completada
          };
        }
        return todo;
      })
    );
  };

  return (
    <Fragment>
      <h1 className="modal-dialog modal-sm">Mi Álbun</h1>

      <div className="input-group mt-4 mb-4">
        <input ref={tareaRef} placeholder="Ingrese un título" className="form-control" type="text" />
        <button onClick={agregarTarea} className="btn btn-success ms-2">
          Agregar
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <ul className="list-group">
        {todos.map((todo) => (
          <Todoitem todo={todo} key={todo.id} eliminarTarea={eliminarTarea} toggleCompletado={toggleCompletado} />
        ))}
      </ul>
    </Fragment>
  );
}

ReactDOM.render(<TodoList />, document.getElementById("root"));
