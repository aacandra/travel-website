import React, { useState } from 'react';
import './navbar.css';
import { GiIsland } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import ModalComponent from '../SignIn/SignIn'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNavbar = () => {
    setActive('navBar');
  };

  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h4>
              <GiIsland className="icon" />
              Next-Travel{' '}
            </h4>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Promo
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Activity
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            {/* <button className="btn" onClick={handleShowModal}>
              Sign In
            </button> */}
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>

        <ModalComponent
          showModal={showModal}
          handleClose={handleCloseModal}
          handleSave={() => alert('Sign In button clicked')}
        />
      </header>
    </section>
  );
};

export default Navbar;
