import React from 'react'
import Todo from './Todo'


const TodoList = (props) => {
    console.log("This is our list from TodoList.js", props.list)
    return (
        <div className="shopping-list">
      {props.list.map((item) => (
        <Todo key={item.id} name={item.item} id={item.id} completed={item.completed} toggleListItem={props.toggleListItem}/* toggleListItem={props.toggleListItem} */ />
    //   <p key={item.id}>{item.item}</p>
      ))}
      
    </div>
    )
}

export default TodoList

