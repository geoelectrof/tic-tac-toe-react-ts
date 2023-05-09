import { useState } from 'react';
import './App.css'
import Square from './components/Square'

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsPlaying, setXIsPlaying] = useState(true)

  function handleClick(e: React.MouseEvent<HTMLButtonElement>, index: number){
    // console.log("Clicked!" ,e.currentTarget , index)

    //Prevents changing the value while clicking on an already clicked square
    if (squares[index]) {
      return
    }
    
    const newSquares = squares.slice()
    if (xIsPlaying) {
      newSquares[index] = "X"
    } else {
      newSquares[index] = "O"   
    }
    setSquares(newSquares)
    setXIsPlaying(!xIsPlaying)
  }

  return (
    <>
      <div>App</div>  
      <div>       
        <Square index = {0} handleClick = { (e, index) => handleClick(e, index) }> { squares[0] } </Square>
        <Square index = {1} handleClick = { (e, index) => handleClick(e, index) }> { squares[1] } </Square>
        <Square index = {2} handleClick = { (e, index) => handleClick(e, index) }> { squares[2] } </Square>
      </div>
      <div>       
        <Square index = {3} handleClick = { (e, index) => handleClick(e, index) }> { squares[3] } </Square>
        <Square index = {4} handleClick = { (e, index) => handleClick(e, index) }> { squares[4] } </Square>
        <Square index = {5} handleClick = { (e, index) => handleClick(e, index) }> { squares[5] } </Square>
      </div>
      <div>       
        <Square index = {6} handleClick = { (e, index) => handleClick(e, index) }> { squares[6] } </Square>
        <Square index = {7} handleClick = { (e, index) => handleClick(e, index) }> { squares[7] } </Square>
        <Square index = {8} handleClick = { (e, index) => handleClick(e, index) }> { squares[8] } </Square>
      </div>
    </>
  )
}

export default App
