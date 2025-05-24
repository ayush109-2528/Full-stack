import { useState } from 'react'
import './App.css'
import Card from "../public/card";
import contacts from "../public/contacts";
import Avatar from '../public/Avatar';
function App() {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://i.pinimg.com/originals/74/7c/5c/747c5c9d6727452611d6d7a8abdfcecf.jpg"/>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </>
  )
}

export default App
