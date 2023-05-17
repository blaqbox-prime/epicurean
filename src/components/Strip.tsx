import React, { HTMLProps } from "react";

export interface IStrip extends HTMLProps<HTMLElement>{
    imgUrl: string;
    subtitle: string;
    title: string;
    text?: string;
    link?: string;
};

function Strip({imgUrl,subtitle,title,className, link = "#"}: IStrip) {
  return (
    <div className={`strip ${className && className}`}>
      <div className="strip-bg h-100">
        <img
          src={imgUrl}
          width={950}
          height={1880}
          alt=""
          className="img-cover"
        />
      </div>

      <div className="strip-content">
        <p className="label-1 section-subtitle">{subtitle}</p>

        <h1 className="display-1 hero-title">{title}</h1>

        {/* <p className="body-3 hero-text strip-reveal">
          Good mornings start with good food
        </p> */}
        <a href={link} className={`btn btn-primary strip-reveal`}>
          <span className="text text-1">View Menu</span>

          <span className="text text-2" aria-hidden={true}>
            View Menu
          </span>
        </a>
      </div>
    </div>
  );
}

export default Strip;
