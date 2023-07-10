import React, { Fragment,useState } from "react";
import ReactDOM  from "react-dom";

import { Todoitem } from "./Todoitem";

export function TodoList(){

    
    
    
    
    
    
    
    const [todos, setTodos] = useState([
        {id:1, tarea:'Tarea 1'}, {id:2, tarea:'Tarea 2'}, 
        {id:3, tarea:'Tarea 3'}, {id:4, tarea:'Tarea 4'},
        {id:5, tarea:'Tarea 5'}, {id:6, tarea:'Tarea 6'}, 



    ]);














    return ( 
                <Fragment>
                <h1>Listado de tareas</h1>

                  <div className="input-groump mt-4 mb-4">
                    <input placeholder="ingrese una tarea"className="from-control" type="text "></input>
                    <button className="btn btn-success ms-2">Agregar</button>
                  </div>
                  <ul className="list-group">
                    {todos.map((todo) => (
                    <Todoitem todo={todo}></Todoitem>
                    
                    ))}
                  </ul>

                </Fragment>


    );
}