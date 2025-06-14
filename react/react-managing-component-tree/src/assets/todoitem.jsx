import React, { useState } from "react";

function TodoItem(props) {
//   const [isDone, setDone] = useState(false);
//   function handleclick() {
//     setDone((prev) => {
//       return !prev;
//     });
//   }
  return (
    <div onClick={()=>{props.onChecked(props.id)}}>
      <li>
        {props.text}
      </li>
    </div>
  );
}
export default TodoItem;
