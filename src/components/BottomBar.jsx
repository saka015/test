import  { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";

const BottomBar = () => {
  const [showBottomBar, setShowBottomBar] = useState(true);
  const [boxes, setBoxes] = useState(Array(1).fill(null));
  const toggleBottomBar = () => {
    setShowBottomBar(!showBottomBar);
  };

  const addBox = () => {
    setBoxes([...boxes, null]); // Adding a new box to the array
  };

  return (
    <div className={`bottom-bar ${showBottomBar ? "block" : "goDown"}`}>
      {showBottomBar ? (
        <FaChevronDown className="icon" onClick={toggleBottomBar} />
      ) : (
        <IoIosArrowUp className="icon" onClick={toggleBottomBar} />
      )}

      <br />
      <div className="all-boxes">
        {boxes.map((_, index) => (
          <div className="box" key={index}></div>
        ))}
        <div className="box">
          <CiCirclePlus className="icon" onClick={addBox} />
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
