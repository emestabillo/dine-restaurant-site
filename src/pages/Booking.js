import React from 'react'
import Header from "../components/Header"
import HeaderText from "../components/HeaderText"
import Form from "../components/Form"

function Booking() {
  return (
    <>
      <Header>
        <HeaderText
          title="Reservations"
          subtitle="We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.">
        </HeaderText>
      </Header>
      <Form />
    </>
  )
}

export default Booking;