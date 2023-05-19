/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IMenuItem } from "./MenuItem";
import { Link } from "react-router-dom";
import { HiMinus, HiPlus } from "react-icons/hi";
import { RandString } from "../utils/utils";

export interface ICartItem {
  menuItem: IMenuItem;
  quantity?: number;
};


export default function CartItem({ menuItem, quantity = 1 }: ICartItem) {
  const { imgUrl, alt, title, description, seasonal, isNew, price } = menuItem;
  return (
    <li className="cart-item hover:card">
      <figure
        className="card-banner img-holder"
      >
        <img
          src={imgUrl}
          loading="lazy"
          width={10}
          height={10}
          alt={alt}
          className="img-cover"
        />
      </figure>

      <div className="">
                    <div className="title-wrapper">
                      <h3 className="body-2">
                        <Link to="/menu" className="card-title">
                          {title}
                        </Link>
                      </h3>
                    </div>
                    {/* Quanityt Counter */}

                <div className="quantity-counter">
                    <button><HiPlus/></button>
                    <p className="label-1">{quantity}</p>
                    <button><HiMinus/></button>
                </div>

                  </div>
                  <span className="span label-1">{RandString.format(quantity*price)}</span>
    </li>
  );
}

