import React from "react";
import ReactDOM  from "react-dom";

export function Todoitem({todo}){

    const {id, tarea} = todo; 

    return (
        <li className="list-group-item">{tarea}</li>
    );
}    