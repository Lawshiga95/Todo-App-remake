import React from 'react';

// Alternate to function
const Form = ({ setInputText, setTodoList, todos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value); // log the event
    setInputText(e.target.value);
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodoList([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000} // pass any todos in the list: in the curly braces that decides how we want our todos looks like
    ]); // here we are creating an object with these text, completed, and id
    setInputText("");
  }

  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  }

  return (
    <form>
      {/* every time the input changes it is gonna be logged */}
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit" >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form