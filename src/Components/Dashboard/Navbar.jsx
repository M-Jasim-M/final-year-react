import React from 'react'
import './Dashbord.css';
export default function Navbar() {
  return (
    <>
    <div className='dmain'>
        <div className='dimg1'><img src="Frame 2.png" alt="img" /></div>
        <div className='ddas'>DashBoard</div>
        <div className='ser'><input type='serch' placeholder='Search here'></input><img src='serc.png'/></div>
        <div className='star'><span className='dic'><img src='plus.png'/> </span>Start Project</div>
        <div className='dani'>
<div className='name'>Daniyal<br/><span className='da'>@dany19</span></div>
<div className='dimgd'><img src='dpic.png'/></div>
<div className='noti'><img src="notification.png" alt="" /></div>
        </div>
    </div>
    </>
  )
}
