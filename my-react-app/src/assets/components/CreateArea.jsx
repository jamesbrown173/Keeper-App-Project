import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInputText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitInputText(event) {
    props.onClick(inputText);
    event.preventDefault();
    setInputText({
      title: "",
      content: "",
    });
  }

  var isTypingClicked = false;

  function expand() {
    setExpanded(true);
  }

  function deExpand() {
    setExpanded(false);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            value={inputText.title}
            name="title"
            placeholder="Title"
          />
        )}

        <textarea
          onClick={expand}
          onChange={handleChange}
          value={inputText.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitInputText}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

/* 

Here! Continue to update the form so that it 
passes the input back to the handle typing function....

 onChange={(event) => {
            props.onType(event.target.value, null);
          }}


  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });



 */

export default CreateArea;
