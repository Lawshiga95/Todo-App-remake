import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodoList, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodoList={setTodoList}
            todos={todos}
            text={todo.text}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

// same as above but here we aren't using return instead we implicitly returning it
// const TodoList = () => (

// )

export default TodoList;
