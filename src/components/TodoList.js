import React from "react";
import TodoInput from "./TodoInput";
import Todo from "./Todo";
import "./TodoList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo,addTodo } from "../redux/action";

const TodoList = () => {
  const state = useSelector((state) => ({ ...state }));
  let dispatch = useDispatch();

  const create = (newTodo) =>{
    dispatch(addTodo(newTodo))
  }

  return (
    <div className="TodoList">
      <h1>Todo App with React Redux</h1>
      <TodoInput createTodo ={create} />
      <ul>
        <TransitionGroup className="todo-list">
          {state.todos.todos &&
            state.todos.todos.map((todo) => {
              return (
                <CSSTransition key={todo.id} classNames="todo">
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed ={todo.completed}
                    toggleTodo = {() => dispatch(completeTodo(todo))}
                  />
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default TodoList;
