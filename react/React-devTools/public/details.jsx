import React from "react";

function Details(props) {
  return (
    <>
      <p className="info">{props.tel}</p>
      <p className="info">{props.email}</p>
    </>
  );
}
export default Details