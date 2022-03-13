import React from "react";
function Comp2({ children, name , setName }) {
  console.log('hello from comp2')
  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
    </div>
  );
}

export default Comp2;
