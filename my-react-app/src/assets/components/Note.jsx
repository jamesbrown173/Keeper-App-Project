import React from "react";
import notes from "../notes";

console.log(notes);

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Notes;
