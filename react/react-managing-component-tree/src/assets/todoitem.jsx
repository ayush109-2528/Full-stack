import React, { useState } from "react";

function TodoItem(props) {
//   const [isDone, setDone] = useState(false);
//   function handleclick() {
//     setDone((prev) => {
//       return !prev;
//     });
//   }
  return (
    <div onClick={props.onChecked()}>
      <li>
        {props.text}
      </li>
    </div>
  );
}
export default TodoItem;
