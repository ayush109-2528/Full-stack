import { useState } from "react";
import "./App.css";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function changeHandle(event) {
    const {value, name} = event.target;
    setContact((prev) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prev.lName,
          email: prev.email,
        };
      } else if (name === "lName") {
        return {
          fName: prev.fName,
          lName: value,
          email: prev.email,
        };
      } else if (name === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: value,
        };
      }
    });
  }

  return (
    <>
      <div className="container">
        <h1>
          Hello {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
        <form>
          <input
            onChange={changeHandle}
            name="fName"
            placeholder="First Name"
            value={contact.fName}
          />
          <input
            onChange={changeHandle}
            name="lName"
            placeholder="Last Name"
            value={contact.lName}
          />
          <input
            onChange={changeHandle}
            name="email"
            placeholder="Email"
            value={contact.email}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
