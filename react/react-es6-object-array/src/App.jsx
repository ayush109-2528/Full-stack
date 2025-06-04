import { useState } from "react";
import "./App.css";
import animals, { Useanimal } from "./assets/data";

const [cat, dog] = animals;
console.log(cat);

// const { name, sound } = cat;
// console.log(sound);
// const { name: catName, sound: catSound } = cat;
// console.log(catName);
// console.log(catSound);

// const { sname = "fullfy", animalsound = "purrr" } = cat;
// console.log(sname);

// const {
//   name,
//   sound,
//   fedding: { food, water },
// } = cat;
// console.log(food);

// console.log(Useanimal(cat));
const [animal, makesound] = Useanimal(cat);
console.log(animal);
makesound()


function App() {
  return <></>;
}

export default App;
{
  /* <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table> */
}
