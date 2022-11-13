import React from "react";
const TodoList = (props) => {
  
  return (
    <>
      <div>
        <li>
          {props.text}
          <i className="fa-solid ms-2 fa-pen-to-square text-primary"></i>
          <i className="fa-regular ms-2 fa-rectangle-xmark text-danger" onClick={() => {
            props.onSelect(props.id);
          }}></i>
        </li>
      </div>
    </>
  );
};
export default TodoList;
