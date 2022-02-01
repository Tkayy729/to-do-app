import React from "react";
import "./Todo.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Todo = ({ toggleTodo, deleteTodo, task, completed, id }) => {
  return (
    <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
      <CSSTransition key="normal" timeout={500} classNames="task-text">
        <li className="Todo-task" onClick={toggleTodo}>
          {task}
        </li>
      </CSSTransition>
      <div className="Todo-buttons">
        <button onClick={deleteTodo} >
        <i className="fas fa-trash" />
        </button>
      </div>
    </TransitionGroup>
  );
};

export default Todo;
