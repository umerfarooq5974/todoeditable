import React, { useState } from 'react';
// import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import TodoList from './TodoList';

const ToDoBody = () => {
  const [state, setstate] = useState("");
  const [ints, setints] = useState([]);
  const showintextplace = (event) => {
    setstate(event.target.value);
  };
  const showonclick = () => {
    setints((oldints) => {
      return [...oldints, state];
      
    })
    setstate("");
  }
  const deleteitems = (id) => {
    console.log('deleted');
    return (setints((oldints) => {
      return (oldints.filter((arrElem, index) => {
        return (index !== id);
      }));
    }
    ))};
  return (
    <>
      <div className="todocontainer">
        <div className="todolist">
          <h1>ToDo List</h1>
          <TextField
          id="standard-search"
          label="input field"
            type="search"
            className="text-todo"
            variant="standard"
            value={state}
            onChange={showintextplace}
          />
          <button onClick={showonclick}>
            <Icon baseClassName="fas" className="fa-plus-circle" color="primary" sx={{ fontSize: 40 }} /></button>
          <ol>
            {ints.map((itemvalue, index) => {
              return(<TodoList
                text={itemvalue}
                id={index}
                key={index} 
                onSelect = {deleteitems}
              />)
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
export default ToDoBody;