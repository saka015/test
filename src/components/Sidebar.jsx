import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="sidebar">
      <div>
        <ul>
          <li onClick={toggleSidebar}>home</li>
          <li onClick={toggleSidebar}>home</li>
          <li onClick={toggleSidebar}>home</li>
          <li onClick={toggleSidebar}>home</li>
          <li onClick={toggleSidebar}>home</li>
         
        </ul>
      </div>
      <div className={`sidebar-right  ${showSidebar ? "block" : "hidden"}`}>
        <button onClick={toggleSidebar} className="btn">
          {" "}
          {"<"}{" "}
        </button>
        unt deleniti nihil amet consectetur quia? Animi rerum consequuntur
        distinctio? Placeat voluptatibus sapiente minima enim possimus hic,
        eaque commodi ipsum est dicta accusantium. Ullam, a maiores perspiciatis
        quos dolores odio distinctio ex sed! Modi quasi facilis voluptate
        placeat maiores. Nobis numquam, aliquam nulla fuga aut placeat eligendi
        quasi, iste eos explicabo blanditiis enim magnam corporis in commodi?
      </div>
    </div>
  );
};

export default Sidebar;
