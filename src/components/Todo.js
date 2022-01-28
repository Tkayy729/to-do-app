import React from "react";
import "./Todo.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Todo = ({ toggleTodo, task, completed, id }) => {
  return (
    <div className={completed ? "Todo completed" : "Todo"}>
      <CSSTransition key="normal" timeout={500} classNames="task-text">
        <li className="Todo-task" onclick={toggleTodo}>
          {task}
        </li>
      </CSSTransition>
    </div>
  );
};

export default Todo;
