import React, { ReactNode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'

type Props = {
    children: ReactNode
}

function Pages({children}: Props) {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/menu",
            element: <Menu />
        }
    ])

  return (
    <div>{children}</div>
  )
}

export default Pages