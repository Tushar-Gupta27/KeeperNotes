import React from "react";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p className="contentPara">{props.content}</p>
      <p className="labelPara">{props.label}</p>
      <button onClick={handleClick}>
        <DeleteForeverRoundedIcon />
      </button>
    </div>
  );
}

export default Note;
