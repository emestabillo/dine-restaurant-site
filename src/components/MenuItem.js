import React from 'react'

export default function MenuItem({menuImg, menuTitle, menuDescription }) {
  return (
    <div className="menu__item">
      <picture>
        <source media="(min-width:768px)" srcSet={`assets/homepage/${menuImg}-desktop-tablet.jpg`} />
        <source media="(max-width:767px)" srcSet={`assets/homepage/${menuImg}-mobile.jpg`} />
        <img src={`assets/homepage/${menuImg}-mobile.jpg`} alt="" />
      </picture>
      <div className="menu__text">
        <h3>{menuTitle}</h3>
        <p>{menuDescription}</p>
      </div>
    </div>
  )
}
