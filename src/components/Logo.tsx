import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link to="/" className="logo">
        <img
          src="./assets/images/logo-no-background.svg"
          height={50}
          width={160}
          alt="Epicurean - Home"
        />
      </Link>
  )
}

export default Logo