
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { IMenuItem } from './MenuItem';
import CartItem from './CartItem';
import LinkButton from './LinkButton';
import { Link } from 'react-router-dom';


type Props = {
  toggleCartSideBar: Function | any, 
  isCartOpen: boolean
}

const example: IMenuItem = {
  title: "Hot Chicken Cuban Sandwich",
  description:
    "Mayonaise, yellow mustard, ciabatta bread, swiss cheese, dill pickles and rotisserie chicken.",
  imgUrl:
    "https://www.sidechef.com/recipe_comment/9470df42-adc0-441e-b548-c585b18aa91b.jpg",
  price: 24.99,
  alt: "Hot Chicken Cuban Sandwich",
  seasonal: false,
  isNew: false,
};

export default function CartSideBar({isCartOpen=true, toggleCartSideBar}: Props) {
  return (
    <section className="cartSideBar">
      <div className="container">
        <article className={`bar ${isCartOpen && "active"} `}>

       <div className="cartSideBar__itemsCointainer">
       <button className="close-btn" aria-label="close menu" id="btn-close-menu" data-nav-toggler
       onClick={() => {toggleCartSideBar()}}
      >
        <IoCloseOutline  size={18} />
      </button>
        <h1 className="headline-1">Cart</h1>
        {/* LIST OF ITEMS */}

        <CartItem menuItem={example} quantity={1} />
        <CartItem menuItem={example} quantity={2} />
        <CartItem menuItem={example} quantity={5} />

       </div>
        {/* CHECKOUT BTN */}

        <Link to={"#"} className="btn btn-primary">
              <span className="text text-1">Checkout</span>
              <span className="text text-2" aria-hidden>Checkout</span>
            </Link>

        </article>
      <div className={`overlay ${isCartOpen && "active"}`} data-nav-toggler data-overlay></div>
      </div>
    </section>
  );
};
