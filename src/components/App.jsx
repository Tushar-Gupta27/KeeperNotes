import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Sidebar from "./Sidebar";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);
  const [category, setCategory] = useState("All");

  React.useEffect(() => {
    var renderList = localStorage.getItem("Notes");
    renderList = renderList ? JSON.parse(renderList) : [];
    setNotes(renderList);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem.id !== id;
      });
    });
  }

  return (
    <div className="appWrapper">
      <Header />
      <div className="wrapper">
        <Sidebar categoryChanger={setCategory} />
        <div className="notesArea">
          <CreateArea onAdd={addNote} />
          <div className="notesContainer">
            {notes.length !== 0 &&
              notes.map((noteItem, index) => {
                if (category === "All") {
                  return (
                    <Note
                      key={index}
                      id={noteItem.id}
                      title={noteItem.title}
                      content={noteItem.content}
                      onDelete={deleteNote}
                      label={noteItem.label}
                    />
                  );
                } else {
                  return noteItem.label === category ? (
                    <Note
                      key={index}
                      id={noteItem.id}
                      title={noteItem.title}
                      content={noteItem.content}
                      onDelete={deleteNote}
                      label={noteItem.label}
                    />
                  ) : null;
                }
              })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

// function liClick(event){
//   const liID = event.target.id;
//   console.log(liID);

//   var renderList=localStorage.getItem("Notes");
//   renderList = JSON.parse(renderList);
//   console.log(renderList);
//   renderList = renderList.filter((noteItem)=>{
//     return noteItem.label == liID;
//   });
//   setNotes(renderList);
//   <div className="notes">
//      {notes.map((noteItem,index)=> {
//       return (<Note
//           key={index}
//           id={index}
//           title={noteItem.title}
//           content={noteItem.content}
//           onDelete={deleteNote}
//           label={noteItem.label}
//         />);
//      })}
//   </div>

// }

// function liAllClick() {

// }
