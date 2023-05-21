import { createRef, useLayoutEffect, useState } from "react";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import TopBar from "./components/TopBar";
import { IoChevronUp } from "react-icons/io5";
import Footer from "./components/Footer";

import Pages from "./components/Pages";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackToTop from "./components/BackToTop";



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


  //Navbar toggle 
  const toggleNavbar = () => {
    setIsNavOpen((isNavOpen) => !isNavOpen);
  };

  // SideBar Toggle
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

      <BackToTop />

      <ToastContainer 
      position="top-center"
      theme="colored"
      />
    </div>
  );
}

export default App;
