import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    id: Date.now(),
    label: "General",
    title: "",
    content: "",
  });
  const [drop, setDrop] = useState("Label");
  const [isClicked, setClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleDrop(event) {
    const dropValue = event.target.value;
    setNote((prevNote) => {
      return {
        ...prevNote,
        label: dropValue,
      };
    });
  }

  function listClick(event) {
    const dropValue = event.target.id;
    setNote((prevNote) => {
      return {
        ...prevNote,
        label: dropValue,
      };
    });
    setDrop(dropValue);
  }

  function submitNote(event) {
    // console.log(note);
    // setNote((prev) => ({ ...note, id: Date.now() }));
    props.onAdd(note);
    setNote({
      id: Date.now(),
      label: "General",
      title: "",
      content: "",
    });
    event.preventDefault();
    setClicked(false);
  }
  function clicked() {
    setClicked(true);
  }

  return (
    <div className="createArea">
      <form className="create-note">
        {isClicked ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          onClick={clicked}
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
        />
        <Zoom in={isClicked}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
        {/* {isClicked ? (
          <div className="dropdown">
            <select onChange={handleDrop}>
              <option disabled selected value>
                Label
              </option>
              <option value="General">General</option>
              <option value="Work">Work</option>
              <option value="Home">Home</option>
            </select>
          </div>
        ) : null} */}
        {isClicked ? (
          <div className="dropdown">
            {drop}
            <ul className="dropdownList">
              <li onClick={listClick} id="General">
                General
              </li>
              <li onClick={listClick} id="Home">
                Home
              </li>
              <li onClick={listClick} id="Work">
                Work
              </li>
              <li onClick={listClick} id="School">
                School
              </li>
            </ul>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
