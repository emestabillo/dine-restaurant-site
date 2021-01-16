import React from 'react'
import Header from "../components/Header"
import HeaderText from "../components/HeaderText"
import Form from "../components/Form"
import Button from "../components/Button"

function Booking() {
  return (
    <>
      <Header hero="bookingHeader">
        <HeaderText
          title="Reservations"
          subtitle="We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.">
        </HeaderText>
        <Button link='/booking' btnType='btn--light' btnText='Reserve place'></Button>
      </Header>
      <Form />
    </>
  )
}

export default Booking;