import React, { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';
import { FaTrashAlt } from "react-icons/fa";


const TodoItem = (props) => {
const [ editing, setEditingFunction ] = useState(false);
const { id, title, completed } = props.todo;

const handleEditting = () => setEditingFunction(true);

const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
        setEditingFunction(false)
    }
}

const completedStyle = {
    fontStyle: 'italic',
    opacity: 0.4,
    color: '#595959',
    textDecoration: 'line-through',
};

let viewMode = {};
let editMode = {};

    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }

useEffect(() => {
    return () => {
    console.log("Cleaning up...")
    }
}, [])

return (
    <li className={styles.item}>
    <div onDoubleClick={handleEditting} style={viewMode}>
        <input className={styles['checkbox-all']} type="checkbox" checked={completed}
        onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>< FaTrashAlt /></button>
        <span style={completed ? completedStyle : null}>{title}
        </span>
        </div>
        <input type="text" style={editMode} className={styles['text-input']} value={title}
        onChange={(e) => {props.setUpdateProps(e.target.value, id)}}
        onKeyDown={handleUpdatedDone}
        />
    </li>
    );
}

export default TodoItem;
