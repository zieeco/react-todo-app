import React from "react"
import TodoItem from "./TodoItem"

const TodosList = props => {

  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdateProps={props.setUpdateProps}
        />
      ))}
    </ul>
  )
}
export default TodosList