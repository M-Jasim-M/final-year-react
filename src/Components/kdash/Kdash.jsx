import React from 'react'
import './Kdash.css'
import ToggleSidebar from './Toggle'
import ToggleSideba from './Sidebar'


export default function Kdash() {
  return (
    <>
    <div className="kmain">
     
     <div className="kch1">
     <ToggleSidebar/>
{/* <ToggleSideba/> */}
     </div>
     <div className="kch2">
        two
     </div>
     <div className="kch3">
        three
     </div>

    </div>
    </>
  )
}
