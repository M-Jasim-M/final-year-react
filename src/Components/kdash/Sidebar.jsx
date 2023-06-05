import React, { useState } from "react";
import "./Kdash.css";

const ToggleSideba = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
          <div className="container-fluid p-2">
            <a className="navbar-brand text-primary mr-0">Company Logo</a>
            <div className="form-inline ml-auto">
              <div className="btn btn-primary" onClick={toggleSidebar}>
                <i className="fa fa-bars"></i>
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${isOpen ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0">Sidebar Header</h4>
            <div className="btn btn-primary" onClick={toggleSidebar}>
              {/* <i className="fa fa-times"></i> */}x
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a className="sd-link">Menu Item 1</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 2</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 3</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 4</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 5</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 6</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 7</a>
              </li>
              <li>
                <a className="sd-link">Menu Item 8</a>
              </li>
            </ul>
          </div>
        </div>
        {isOpen && (
          <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        )}
      </div>
    </>
  );
};

export default ToggleSideba;
