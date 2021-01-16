import React from 'react'
import MenuItem from './MenuItem'
import Container from "./Container"

export const MenuList = () => {
  return (
    <section className="menu">
      <Container>
        <h2>A few highlights from our menu</h2>
        <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
        <MenuItem 
          menuImg="salmon"
          menuTitle="Seared Salmon Fillet" 
          menuDescription="Our locally sourced salmon served with a refreshing buckwheat summer salad.">
        </MenuItem>
        <MenuItem
          menuImg="beef" 
          menuTitle="Rosemary Filet Mignon" 
          menuDescription="Our prime beef served to your taste with a delicious choice of seasonal sides.">
        </MenuItem>
        <MenuItem
          menuImg="chocolate"  
          menuTitle="Summer Fruit Chocolate Mousse" 
          menuDescription="Creamy mousse combined with summer fruits and dark chocolate shavings.">
        </MenuItem>
      </Container>
    </section>
  )
}
