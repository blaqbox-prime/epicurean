/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { createRef } from 'react'
import Navbar from './Navbar';
import CartSideBar from './CartSideBar';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import { Link } from 'react-router-dom';


type props = { 
    toggleNav: Function | any, 
    isNavOpen: boolean,
    isCartOpen: boolean, 
    toggleCartSidebar: Function | any,
}


function Header({toggleNav, isNavOpen, isCartOpen, toggleCartSidebar} : props) {

    const headerRef = createRef<HTMLElement>()

  let lastScrollPos = 0;

  const backTop = document.querySelector("[data-back-top-btn]");

  const hideHeader = function(){
    const isScrollBottom = lastScrollPos < window.scrollY;
    if(isScrollBottom){
      headerRef.current?.classList.add("hide");
      if(isCartOpen === true){
        toggleCartSidebar();
      }
    }else {
      headerRef.current?.classList.remove("hide");
    }
    lastScrollPos = window.scrollY;
  }

  window.addEventListener("scroll", () => {
    if(window.scrollY >= 50) {
      headerRef.current?.classList.add("active");
      backTop?.classList.add("active");
      hideHeader();
    }else {
      headerRef.current?.classList.remove("active");
      backTop?.classList.remove("active");
    }
  })




  return (
    <header className="header" id="header" ref={headerRef}>

    <div className="container">


      <Link to="/" className="logo">
        <img src="./assets/images/logo-no-background.svg" height={50} width={160} alt="Epicurean - Home" />
      </Link>

      {/* Nav */}

      <Navbar toggleNavbar={() => { toggleNav(); } } isOpen={isNavOpen} />

    {/* CART SIDEBAR */}
    <CartSideBar isCartOpen={isCartOpen} toggleCartSideBar={toggleCartSidebar} />


      <a href="#" className="btn btn-secondary">
        <span className="text text-1">Find A Table</span>

        <span className="text text-2" aria-hidden="true">Find A Table</span>
      </a>

      <button className="shoppingBagIcon" aria-label="open menu" 
      onClick={() => toggleCartSidebar()}
      >
        <HiOutlineShoppingBag color='white' size={24}/>
      </button>

      <button className="nav-open-btn" aria-label="open menu" data-nav-toggler
        onClick={() => { toggleNav(); } }
      >
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </button>


      <div className={`overlay ${isNavOpen && "active"}`} data-nav-toggler data-overlay></div>

    </div>

  </header>
  )
}

export default Header