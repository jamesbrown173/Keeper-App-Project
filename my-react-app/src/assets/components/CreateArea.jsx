import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onChange={props.onType}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

/* 

Here! Continue to update the form so that it 
passes the input back to the handle typing function....

 */

export default CreateArea;
