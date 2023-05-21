
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { IMenuItem } from './MenuItem';
import CartItem, { ICartItem } from './CartItem';
import LinkButton from './LinkButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RandString } from '../utils/utils';


type Props = {
  toggleCartSideBar: Function | any, 
  isCartOpen: boolean
}


export default function CartSideBar({isCartOpen=true, toggleCartSideBar}: Props) {

  const cart = useSelector((state: any) => state.cart)


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
        <h1 className="headline-2">Total: {RandString.format(cart.total)}</h1>
        {/* LIST OF ITEMS */}

        {cart.items.length === 0 && <p className='label-1'>No items in cart</p>}

        {
          cart.items.map((item: ICartItem) => <CartItem item={item} key={item.menuItem.title} />)
        }
        

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
