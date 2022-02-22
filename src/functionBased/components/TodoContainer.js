import React, { useState, useEffect } from 'react';
import TodosList from './TodosList';
import Header from './Header';
import TodoInput from './TodoInput';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';


const TodoContainer = () => {
  // const getInitialTodos = () => JSON.parse(localStorage.getItem('todos')) || [];
  const [ todos, setTodosFunction ] = useState([]);

  const handleChange = id => {
    setTodosFunction((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }));
  };

  const delTodo = (id) => setTodosFunction([...todos.filter((todo) => todo.id !== id)]);

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }

    setTodosFunction([...todos, newTodo]);
  }

  const setUpdate = (updatedTitle, id) => {
    setTodosFunction(todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('todos'))) {
      setTodosFunction(JSON.parse(localStorage.getItem('todos')));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <div className="container">
      <div className="inner">
    <Navbar />
        <Header />
        <TodoInput addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdateProps={setUpdate}
        />
      </div>
    </div>

    );
};

export default TodoContainer;
