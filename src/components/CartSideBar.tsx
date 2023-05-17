import React from 'react'

type props = { 
  toggleCartSideBar: Function | any, 
  isCartOpen: boolean
}

function CartSideBar({isCartOpen=true, toggleCartSideBar} : props) {

  return (
    <section className="cartSideBar">
      <div className="container">
        <article className="bar">
        
        <img className="logo" src="./assets/images/logo-no-background.svg" height={50} width={160} alt="Epicurean - Home" />

        {/* LIST OF ITEMS */}

        <div className="sidebarCartItem">
          
        </div>

        {/* CHECKOUT BTN */}
        </article>
      <div className={`overlay ${isCartOpen && "active"}`} data-nav-toggler data-overlay></div>
      </div>
    </section>
  )
}

export default CartSideBar