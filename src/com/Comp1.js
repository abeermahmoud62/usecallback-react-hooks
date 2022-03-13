import React from "react";

function Comp1({ children, val1, setVal1 , val2 , setVal2 }) {
  console.log('hello from comp1')
  return (
    <div>
      <input
        value={val1}
        onChange={({ target }) =>
          setVal1(parseInt(target.value))
        }
      />
      <input
        value={val2}
        onChange={({ target }) =>
          setVal2(parseInt(target.value))
        }
      />
      
    </div>
  );
}

export default Comp1;
