import React from "react";

function Sum({value1 , value2}) {
  console.log('render sum')
  return (
    <div>
      result :
      {value1 + value2}
    </div>
  );
}

export default React.memo(Sum);
