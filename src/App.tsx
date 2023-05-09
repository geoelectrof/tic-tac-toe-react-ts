import { useState } from 'react';
import './App.css'
import Square from './components/Square'

function App() {

    const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(e: React.MouseEvent<HTMLButtonElement>, index: number){
    console.log("Clicked!" ,e , index)
  }

  return (
    <>
      <div>App</div>  
      <div>       
        <Square index = {0} handleClick = { (e, index) => handleClick(e, index) }> { squares[0] } </Square>
        {/* <Square>{squares[1]}</Square>
        <Square>{squares[2]}</Square> */}
      </div>
      <div>       
        {/* <Square>{squares[3]}</Square>
        <Square>{squares[4]}</Square>
        <Square>{squares[5]}</Square> */}
      </div>
      <div>       
        {/* <Square>{squares[6]}</Square>
        <Square>{squares[7]}</Square>
        <Square>{squares[8]}</Square> */}
      </div>
    </>
  )
}

export default App
