import {useState  ,useCallback } from 'react'
import Input from './components/Input';
import Sum from './components/Sum';



export default function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  
    const value1Handle = useCallback( (e)=>{
        setValue1(parseInt(e.target.value))
    },[value1])
    const value2Handle = useCallback((e)=>{
      setValue2(parseInt(e.target.value))
    },[value2])

  return (
    <div className="App" style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
      <Input value={value1} handleChange={value1Handle} />
      +
      <Input value={value2} handleChange={value2Handle} />

      <Sum value1={value1} value2={value2} />
    </div>
  );
}




