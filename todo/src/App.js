import React, { /* useReducer, */ useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// import { initialAppState, appReducer } from './reducers/app.Reducer'

const App = () => {
  // const[state, dispatch] = useReducer(appReducer, initialAppState)
  // const todos = []
  const [list, setList] = useState([
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
    {
      item: "Learn about food",
      completed: false,
      id: 3892987587,
    },
  ]);

  const toggleListItem = (itemId) => {
    console.log("this is the itemID from toggleListItem", itemId)
    setList([
      list.map((item) => {
        if(item.id === itemId){
          return {...item, completed: !item.completed}
        }
        return item
      })
    ])
  }

  const addListItem = (taskName) => {
    setList([
      ...list, { item: taskName, completed: false, id: Date.now() }
    ]);
  };
  
  return (
    <div className="App">
      <div className="header">
        <h1>Welcome to Chad's Todo App!</h1>
        <TodoForm addListItem={addListItem} />
      </div>
      <div>
        <TodoList list={list} toggleListItem={toggleListItem}/>
      </div>
    </div>
  );
};

export default App;
