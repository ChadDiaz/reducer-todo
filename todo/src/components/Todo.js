import React from 'react'

const Todo = ({name, id, completed, toggleListItem}) => {
console.log("this is our name from Todo.JS", name)

    return (
        <div onClick={() => toggleListItem(id)}>
           <p name={name} id={id} completed={completed}>{name}</p> 
        </div>
    )
}

export default Todo
