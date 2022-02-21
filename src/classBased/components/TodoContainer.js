import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import TodoInput from './TodoInput';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {
  // constructor(props) {
    // super(props);
    state = {
      todos: [],
    };
  // }



  handleChange = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo;
        }),
      }
      });
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
    console.log(updatedTitle, id);
  }

  componentDidMount() {
    if (localStorage.getItem('todos') !== null) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('todos'))
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }
  render() {
    return (
      <div className="container">
      <div className="inner">
        <Header />
        <TodoInput addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
          setUpdateProps={this.setUpdate}
        />
      </div>
    </div>
    );
  }
}

export default TodoContainer;
