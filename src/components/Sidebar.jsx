import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Sidebar({ categoryChanger }) {
  //   const sideStyle = {
  //     backgroundColor: "#f5ba13",
  //     transform: "scale(1.1)",
  //   };

  //   const [sideClick, setSideClick] = useState([true, false, false, false]);
  //   const [sideAllClicked, setAllClicked] = useState(true);
  //   const [sideHomeClicked, setHomeClicked] = useState(false);
  //   const [sideWorkClicked, setWorkClicked] = useState(false);
  //   const [sideSchClicked, setSchClicked] = useState(false);

  //   function handleClick(event) {
  //     const tempArr = sideClick.slice();
  //     const tar = event.target.id;
  //     console.log(tar);
  //     const tempArr2 = tempArr.map((ele, index) => {
  //       return false;
  //     });
  //     tempArr2[tar] = true;
  //     setSideClick(tempArr2);
  //     console.log(sideClick);
  //   }

  // console.log(props.noteList);
  return (
    <div className="side">
      <nav>
        <ul>
          <li onClick={() => categoryChanger("All")}>
            <AiIcons.AiOutlineSmallDash />
            <span>All</span>
          </li>

          <li onClick={() => categoryChanger("Home")}>
            <AiIcons.AiFillHome />
            <span>Home</span>
          </li>

          <li onClick={() => categoryChanger("Work")}>
            <FaIcons.FaBuilding />
            <span>Work</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
