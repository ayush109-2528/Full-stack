import { useState } from 'react'

function Heading(){
    const today = new Date();
  let time = today.getHours();
  let style, wish;
  if (time <= 12) {
    wish = "good Morning";
    style = { color: "red" };
  } else if (time < 18) {
    wish = "good evening";
    style = { color: "blue" };
  } else {
    wish = "good afternoon";
    style = { color: "green" };
  }
    return<>
    <h1 className="dynamic" style={style}>
        {wish}
      </h1>
    </>
}
export default Heading;