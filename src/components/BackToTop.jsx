import React from 'react'
import { IoChevronUp } from 'react-icons/io5'

function BackToTop() {
  return (
    <a href="#top" className="back-top-btn " aria-label="back to top" data-back-top-btn 
      >
        <IoChevronUp aria-hidden="true"/> 
      </a>
  )
}

export default BackToTop