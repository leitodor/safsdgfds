import React, { useState } from "react";

export function Todoitem({ todo, eliminarTarea, toggleCompletado }) {
  const { id, tarea, completada } = todo;
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEliminarTarea = () => {
    eliminarTarea(id);
  };

  const handleToggleComplete = () => {
    toggleCompletado(id);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleSaveEdit = (event) => {
    if (event.key === "Enter" || event.type === "blur") {
      setEditing(false);
      // Aquí puedes implementar la lógica para guardar la tarea editada en la lista
    }
  };

  return (
    <li className={`list-group-item d-flex justify-content-between ${completada ? "completed" : ""}`}>
      {todo ? (
        <input
          type="card"
          value={tarea}
          onChange={handleInputChange}
          onKeyDown={handleSaveEdit}
          onBlur={handleSaveEdit}
        />
      ) : (
        <div onClick={handleToggleComplete}>
          {completada ? <del>{tarea}</del> : tarea}
        </div>
      )}
      <div>
       
        <button onClick={handleEliminarTarea} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    </li>
  );
}
