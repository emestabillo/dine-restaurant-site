import React from 'react'

export default function MenuItem({menuImg, menuTitle, menuDescription }) {
  return (
    <div className="menu__item">
      <img src="" alt=""/>
      <div className="menu__text">
        <h3>{menuTitle}</h3>
        <p>{menuDescription}</p>
      </div>
    </div>
  )
}
