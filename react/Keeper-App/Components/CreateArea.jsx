import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [inputText, setinputText] = useState({
    title: "",
    content: "",
  });
  function handlechange(event) {
    const { name, value } = event.target;
    setinputText((prev) => {
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
  function expand(){
    setExpanded(true)
  }
  return (
    <div>
      <form className="create-note">
        {
          isExpanded &&(
        <input
          onChange={handlechange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />)}
        <textarea
          onClick={expand}
          onChange={handlechange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded?3:1}
          value={inputText.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
