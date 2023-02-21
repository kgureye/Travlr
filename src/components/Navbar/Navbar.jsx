import React, { useState } from 'react'
import './navbar.css'
import { MdTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {
  const [active, setActive] = useState('navBar');
  /* Toggle navbar */
  const showNav = () => {
    setActive('navBar activeNavbar');
  }
   /* remove navbar  */
   const removeNavbar = () => {
    setActive('navBar');
  }

  return (
    <section className="navBarSection">
      <header className="header flex">
        {/* Logo */}
        <div className="logoDiv">
          <a href="#" className="logo flex">
              <h1><MdTravelExplore className="icon" /> Travlr</h1>
          </a>
        </div>

        {/* Navbar */}
        <div className={active}>
           <ul className="navLists flex">
             <li className="navItem">
               <a href="#" className="navLink">Hjem</a>
             </li>
             <li className="navItem">
               <a href="#main" className="navLink">Reisemål</a>
             </li>
             <li className="navItem">
               <a href="#" className="navLink">Nyheter</a>
             </li>
             <li className="navItem">
               <a href="#" className="navLink">Om Travlr</a>
             </li>
             <li className="navItem">
               <a href="#" className="navLink">Kontakt</a>
             </li>
              <button className="nav-btn">
                <a href="#"> Bestill Nå</a>
              </button>
           </ul>

           <div onClick={removeNavbar} className="closeNavbar">
             <AiFillCloseCircle className="icon" />
           </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
           <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  )
}

export default Navbar





