import  { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedContent, setSelectedContent] = useState("home");

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleContentChange = (content) => {
    setSelectedContent(content);
    setShowSidebar(true); // Show sidebar when content changes
  };

  const getContent = () => {
    switch (selectedContent) {
      case "home":
        return <div>Home content goes here.</div>;
      case "contact":
        return <div>Contact content goes here.</div>;
      case "about":
        return <div>About content goes here.</div>;
      case "address":
        return <div>Address content goes here.</div>;
      case "rules":
        return <div>Rules content goes here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="sidebar">
      <div>
        <ul>
          <li onClick={() => handleContentChange("home")}>home</li>
          <li onClick={() => handleContentChange("contact")}>contact</li>
          <li onClick={() => handleContentChange("about")}>about</li>
          <li onClick={() => handleContentChange("address")}>address</li>
          <li onClick={() => handleContentChange("rules")}>rules</li>
        </ul>
      </div>
      <div className={`sidebar-right  ${showSidebar ? "block" : "hidden"}`}>
        <button onClick={toggleSidebar} className="btn">
          <IoIosArrowBack />
        </button>
        {getContent()}
      </div>
    </div>
  );
};

export default Sidebar;
