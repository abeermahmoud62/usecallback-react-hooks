import React from "react";

function Input({value , handleChange }) {
  console.log("render input " + value )
  return (
    <div style={{margin:"20px" , height:"30px"}}>
      <input
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default React.memo(Input);