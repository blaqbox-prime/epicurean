import { createRef, useLayoutEffect, useState } from "react";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import TopBar from "./components/TopBar";
import { IoChevronUp } from "react-icons/io5";
import Footer from "./components/Footer";

import Pages from "./components/Pages";
import CartSideBar from "./components/CartSideBar";


function App() {
  const [preloaded, setPreloaded] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  let app = createRef<HTMLElement>();


  useLayoutEffect(() => {
    if(!preloaded){window.addEventListener("load", function () {
      setPreloaded(true);
      document.body.classList.add("loaded");
    });}
  }, [preloaded,app]);

  const toggleNavbar = () => {
    setIsNavOpen((isNavOpen) => !isNavOpen);
  };

  const toggleCartSidebar = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  };


  return (
    <div className="App" >
      
      {/* PreLoader */}
      <Preloader loaded={preloaded} />

      {/* TOP BAR  */}
      <TopBar />

      {/* HEADER */}
      <Header toggleNav={toggleNavbar} isNavOpen={isNavOpen} isCartOpen={isCartOpen} toggleCartSidebar={toggleCartSidebar} />
      
      {/* PAGES */}

      <Pages />
              
      {/* FOOTER */}

      <Footer />

      {/* BACK TO TOP */}

      <a href="#top" className="back-top-btn " aria-label="back to top" data-back-top-btn 
      >
        <IoChevronUp aria-hidden="true"/> 
      </a>

    </div>
  );
}

export default App;
