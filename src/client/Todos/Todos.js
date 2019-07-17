/* eslint-disable react/no-array-index-key */
import React from "react";
import Todo from "../Todo/Todo";
import "./Todos.css";
import useTodos from './useTodos'
import TodoButton from "../Todo/TodoButton";

export default function Todos() {
  // Replace useState with useTodos
  // remove parameter (useTodos doesn't take a parameter)
  const [todos, setTodos] = useTodos();

  if (todos !== null) {
    return (
      <div className="Todos_container">
        {todos.map((todo, index) => (
          <Todo
            key={todo.label + index}
            todo={todo}
            onDelete={() => {
              setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
            }}
            onComplete={() => {
              setTodos([
                ...todos.slice(0, index),
                { ...todo, complete: !todo.complete },
                ...todos.slice(index + 1)
              ]);
            }}
            onDupe={()=>{
              // way1
              const current_todo = todos[index];
              const new_todos = [...todos, current_todo];
              setTodos(new_todos);
              
              // way2
              // const todos2 = todos;
              // todos2.push(current_todo);
              // setTodos([...todos2]);
            }
            
            }

          />
        ))}
      </div>
      
    );
  }

  return <span>Waiting...</span>;
}
