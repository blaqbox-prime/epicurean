/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/CartSlice';
import { HiShoppingBag } from 'react-icons/hi';
import { toast } from 'react-toastify';

export interface IMenuItem {
    imgUrl: string,
    alt?: string,
    title: string,
    description: string,
    seasonal?: boolean,
    price: number,
    isNew?: boolean
}



export default function MenuItem({imgUrl,alt,title,description,seasonal = false, isNew = false,price}: IMenuItem) {

  const dispatch = useDispatch();
  
  const handleOnClick = () => {
    const item:IMenuItem = {imgUrl,alt,title,description,seasonal, isNew, price};
    dispatch(addToCart(item))
    toast.success(`${title} added to cart`)
  }


  return (
    <li>
                <div className="menu-card hover:card">
                  <figure
                    className="card-banner img-holder"
                    // style={{ width: 100, height: 100 }}
                  >
                    
                    <div className="product_img_holder">
                    <img
                      src={imgUrl}
                      loading="lazy"
                      width={100}
                      height={100}
                      alt={alt}
                      className="img-cover"
                      onClick={handleOnClick}
                    />
                    <HiShoppingBag className='bagIcon' size={28}/>
                    </div>
                  </figure>

                  <div className="">
                    <div className="title-wrapper">
                      <h3 className="title-3">
                        <a href="#" className="card-title">
                          {title}
                        </a>
                      </h3>

                      {seasonal && <span className="badge label-1">Seasonal</span>}
                      {isNew && <span className="badge label-1">New</span>}
                      <span className="span title-2">R{price}</span>
                    </div>

                    <p className="card-text label-1">
                      {description}
                    </p>
                  </div>

                </div>
              </li>
  )
}