import {useState , useCallback, useMemo } from 'react'
import Comp1 from './com/Comp1';
import Comp2 from './com/Comp2';

function sum(a, b) {
  console.log('sum() ran');
  return a + b;
}

export default function App() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [name, setName] = useState('Jim');
  
  const result = useCallback(sum(val1, val2), [val1, val2]);
  // const result = useMemo(() => sum(val1, val2), [val1, val2]);

  return (
    <div className="App">
      <Comp1 val1={val1} val2={val2} setVal1={setVal1} setVal2={setVal2} />
      <Comp2 name={name} setName={setName} />
      <p>{result}</p>
    </div>
  );
}




