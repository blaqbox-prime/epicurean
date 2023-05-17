import React from 'react'
import GridList from './GridList'
import Logo from './Logo'
import { IoMailOutline } from 'react-icons/io5'

type Props = {}

function Footer({}: Props) {
  return (
    <footer
    className="footer section has-bg-image text-center"
    style={{ backgroundImage: "url('assets/images/footer-bg.jpg')" }}
  >
    <div className="container">
      <GridList className="footer-top">
        <div className="footer-brand has-before has-after">
          <Logo />

          <address className="body-4">
            7 Acacia St. Flora Park, Polokwane 0699, L
          </address>

          <a href="mailto:andiswa@epicurean.com" className="body-4 contact-link">
          andiswa@epicurean.com
          </a>

          <a href="tel:0748521547" className="body-4 contact-link">
          Booking Request : 0748521547
          </a>

          <p className="body-4">
            Open : 09:00 am - 10:00 pm
          </p>

          <div className="wrapper">
            <div className="separator"></div>
            <div className="separator"></div>
            <div className="separator"></div>
          </div>

          <p className="title-1">Get News & Offers</p>

          <p className="label-1">
            Subscribe to us & get <span className="span">25% Off.</span>
          </p>

          <form action="" className="input-wrapper">
            <div className="icon-wrapper">
              <IoMailOutline className="icon"/>
              <input type="email" name="email" placeholder="Your email" id="" className="input-field" />
            </div>

          <button type="submit" className="btn btn-secondary">
            <span className="text text-1">Subscribe</span>
            <span className="text text-2" aria-hidden="true">Subscribe</span>
          </button>

          </form>

        </div>

        <ul className="footer-list">
          <li>
            <a href="#" className="label-2 footer-link hover-underline">Home</a>
          </li>

          <li>
            <a href="#" className="label-2 footer-link hover-underline">Menu</a>
          </li>

          <li>
            <a href="#" className="label-2 footer-link hover-underline">About Us</a>
          </li>

          <li>
            <a href="#" className="label-2 footer-link hover-underline">Our Chefs</a>
          </li>

          <li>
            <a href="#" className="label-2 footer-link hover-underline">Contact</a>
          </li>

        </ul>

        <ul className="footer-list">
          <li>
            <a href="#" className="label-2 footer-link hover-underline">Facebook</a>
          </li>

          <li>
            <a href="#" className="label-2 footer-link hover-underline">Instagram</a>
          </li>

          <li>
            <a href="#" className="label-2 footer-link hover-underline">Twitter</a>
          </li>

          <li>
            <a href="#" className="label-2 footer-link hover-underline">Youtube</a>
          </li>

          <li>
            <a href="#" className="label-2 footer-link hover-underline">Google Map</a>
          </li>

        </ul>

      </GridList>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; 2023 Epicurean. All rights reserved | Inspired by <a href="https://github.com/codewithsadee" target="_blank" className="link" rel="noreferrer">
          codewithsadee
          </a>
        </p>
      </div>

    </div>
  </footer>
  )
}

export default Footer