import { use, useState } from "react";
import "./App.css";

function App() {
  // const [firstname, setfname] = useState("");
  // const [lastname, setlname] = useState("");
  // const [triggered, fn] = useState(false);
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  function updateFname(event) {
    // const newvalue = event.target.value;
    // const inputName = event.target.value;
    // if (inputName === "fName") {
    //   setFullName({ fName: newvalue });
    // } else if (inputName === "lName") {
    //   setFullName({ lName: newvalue });
    // }
    const {value, name} = event.target;
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }
  return (
    <>
      <div className="container">
        <h1>
          Hello {fullName.fName}{fullName.lName}
        </h1>
        <form>
          <input
            onChange={updateFname}
            name="fName"
            placeholder="First Name"
            value={fullName.fName}
          />
          <input
            onChange={updateFname}
            name="lName"
            placeholder="Last Name"
            value={fullName.lName}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
