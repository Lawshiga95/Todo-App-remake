import React, { useState, useEffect } from "react";
import "./App.css";
// Importing Components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  //states 
  const [inputText, setInputText] = useState("");
  const [todos, setTodoList] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once when the app is started
  useEffect(() => {
    getLocalTodos();
  }, [])

  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case 'completed': setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted': setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default: setFilteredTodos(todos);
        break;
    }
  }

  // save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      // let todoLocal = localStorage.getItem('todos', JSON.stringify(todos));
      // console.log(todoLocal);
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodoList(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Lawshiga's Todo List</h1>
        {/* <h1>{inputText}</h1> */}
      </header>
      <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodoList={setTodoList} setInputText={setInputText} />
      <TodoList setTodoList={setTodoList} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
