import React from 'react'

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Card from './Card';
import Sidee from './Sidee';
export default function Dashboard() {
  return (
    <>
    
  <Navbar/>
  <div className='na'>
    <div className='slider'>
  <Sidebar/></div>
  
  <div className='maicard'>
  <div className='cards'>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  
  </div>

  </div>
  <div className='side2'><Sidee/></div>
  </div>
    </>
  )
}
