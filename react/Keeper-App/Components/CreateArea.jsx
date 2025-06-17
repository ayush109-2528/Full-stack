import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [inputText, setinputText] = useState({
    title: "",
    content: "",
  });
  function handlechange(event) {
    const { name, value } = event.target;
    setinputText(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function submmit(event) {
    props.onadd(inputText);
    setinputText({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handlechange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={handlechange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
        />
        <button onClick={submmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
