import { useState } from "react";

const BottomBar = () => {
  const [showBottomBar, setShowBottomBar] = useState(true);

  const toggleBottomBar = () => {
    setShowBottomBar(!showBottomBar);
  };
  return (
    <div className="bottom-bar">
      <button onClick={toggleBottomBar} className="btn">
        sssss
      </button>
      BottomBar
    </div>
  );
};

export default BottomBar;
