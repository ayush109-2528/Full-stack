import { useState } from "react";
import "./App.css";
import cars from "./assets/practice";

function App() {
  const [honda, tesla] = cars;
  const {
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;
  const {
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;
  const {
    coloursByPopularity: [hondaTopColour],
  } = honda;
  const {
    coloursByPopularity: [teslaTopColour],
  } = tesla;
  // console.log(model);
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Brand</th>
            <th>Top Speed</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
