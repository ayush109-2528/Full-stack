import { useState } from "react";
import "./App.css";
import Card from "../public/Card";

function App() {
  return (
    <>
      {/* <h1>My Contacts</h1> */}
      <Card
        name="beyounce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        tel="+918 372 574"
        email="gmail@chucknorris.com"
      />
      <input id="fname" />
    </>
  );
}

export default App;
