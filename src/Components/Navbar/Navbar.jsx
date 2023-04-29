import React, {useState} from 'react'
import './navbar.css'
import {GiIsland} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


const Navbar = () => {
    const [active, setActive] = useState('navBar')
    
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    const removeNavbar = () => {
        setActive('navBar')
    }


  return (
    <section className="navbarSection">
        <header className="header flex">
            <div className="logoDiv">
                <a href='#' className="logo flex">
                    <h1><GiIsland className="icon"/>Next-Travel </h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navList flex">
                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Packages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Contact</a>
                    </li>

                    <button className='btn'>
                       <a href="#"> Sign In</a> 
                    </button>

                </ul>

                    <div onClick={removeNavbar}
                    className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                    
            </div>


            <div onClick={showNav} 
            className="toggleNavbar">
                <TbGridDots className="icon"/>

            </div>
        </header>
        



    </section>
  )
}

export default Navbar