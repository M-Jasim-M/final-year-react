// import React from 'react'
// import './Side.css'
// export default function Sidebar() {
//   return (
//     <>
//     <div className='sbar'>
//      <div className='simg'>
//      <img src='p2.png'/>
//      <img src='p3.svg'/>
//      <img src='p4.png'/>
//      <img src='p5.png'/>

//      </div>

//     <div className='bimg'>
//     <img src='Settings.png'/>
//      <img src='Logout.png'/>
//     </div>


//     </div>
//     </>
//   )
// }

import React, { useState } from "react";
import "./Side.css";

const ToggleSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid mt-3">
          <div className='sbar'>
     <div className='simg'>
      <img src='p2.png'/>
     <img src='p3.svg'/>
     <img src='p4.png'/>
      <img src='p5.png'/>

      </div>

     <div className='bimg'>
    <img src='Settings.png'/>
     <img src='Logout.png'/>
    </div>


    </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <div className="form-inline ml-auto">
                        <div className="btn btn-primary" onClick={toggleSidebar}>
                            {/* <i className="fa fa-bars"></i> */}
                        
                            ///
                    </div>
                </div>
            </nav>
            <div className={`sidebar ${isOpen ? 'active' : ''}`}>
                <div className="sd-header">
                    <div className="btn btn-primary" onClick={toggleSidebar}>
                        {/* <i className="fa fa-times"></i> */}
                    x
                    </div>
                </div>
                <div className="sd-body">
                <div className='jsbare'>
     <div className='simg'>
      <img src='p2.png'/>
     <img src='p3.svg'/>
     <img src='p4.png'/>
      <img src='p5.png'/>

      </div>

     <div className='bimg'>
    <img src='Settings.png'/>
     <img src='Logout.png'/>
    </div>


    </div>
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
        </div>
    );
};

export default ToggleSidebar;
