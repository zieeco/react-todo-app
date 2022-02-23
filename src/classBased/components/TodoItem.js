import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
    state = {
        editing: false,
    };

    handleEditting = () => {
        this.setState({
            editing: true,
        });
    };

    handleUpdatedDone = (e) => {
        if (e.key === 'Enter') {
            this.setState({editing: false});
        }
    }

    componentWillUnmount() {
        console.log('i am cleaning you up!')
    }


    render() {
        const { id, title, completed } = this.props.todo;
        const completedStyle = {
        fontStyle: 'italic',
        opacity: 0.4,
        color: '#595959',
        textDecoration: 'line-through',
    };

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }

        return (
            <li className={styles.item}>
            <div onDoubleClick={this.handleEditting} style={viewMode}>
                <input className={styles['checkbox-all']} type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)} />
                <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
                <span style={completed ? completedStyle : null}>{title}
                </span>
            </div>
            <input type="text" style={editMode} className={styles['text-input']} value={title}
            onChange={(e) => {this.props.setUpdateProps(e.target.value, id)}} 
            onKeyDown={this.handleUpdatedDone}
            />
            </li>
        );
    }
}

export default TodoItem;
