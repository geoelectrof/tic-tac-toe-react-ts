import { useState, useEffect } from 'react';
import './App.css'
import Square from './components/Square'

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsPlaying, setXIsPlaying] = useState(true)
  const [status, setStatus] = useState("X is playing")

  useEffect(() => {
    let winner: string | null = calculateWinner()
    if (winner) {
      setStatus (`${winner} won`)
    } else if (!winner && !squares.includes(null)) {
      setStatus (`It's a tie`)
    } else {
      setStatus (`${xIsPlaying ? "X" : "O"} is playing`)
    }
    console.log('status', status)
  }, [squares])

  function handleClick(e: React.MouseEvent<HTMLButtonElement>, index: number){
    // console.log("Clicked!" ,e.currentTarget , index)

    //Prevents changing the value while clicking on an already clicked square
    //or when we have a winner
    if (squares[index] || calculateWinner()) {
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

  function calculateWinner() {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let res = null;
    winningLines.forEach((line) => {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log("We have a winner " + squares[a]);
        res = squares[a];
      }
    });
    return res;
  }

  function restartGame(){ 
    setSquares(Array(9).fill(null))
    setXIsPlaying(true)
  }

  return (
    <>
      <div>{status}</div>  
      <div className='board'> 
        {squares.map((square, i): React.ReactNode => {
          return (
            <Square
              key={i} 
              index={i} 
              handleClick={(e, index) => handleClick(e, index)}
            >
              {square}
            </Square>
          );
        })}      
        {/* <Square index = {0} handleClick = { (e, index) => handleClick(e, index) }> { squares[0] } </Square>
        <Square index = {1} handleClick = { (e, index) => handleClick(e, index) }> { squares[1] } </Square>
        <Square index = {2} handleClick = { (e, index) => handleClick(e, index) }> { squares[2] } </Square>
     
        <Square index = {3} handleClick = { (e, index) => handleClick(e, index) }> { squares[3] } </Square>
        <Square index = {4} handleClick = { (e, index) => handleClick(e, index) }> { squares[4] } </Square>
        <Square index = {5} handleClick = { (e, index) => handleClick(e, index) }> { squares[5] } </Square>
     
        <Square index = {6} handleClick = { (e, index) => handleClick(e, index) }> { squares[6] } </Square>
        <Square index = {7} handleClick = { (e, index) => handleClick(e, index) }> { squares[7] } </Square>
        <Square index = {8} handleClick = { (e, index) => handleClick(e, index) }> { squares[8] } </Square> */}
      </div>
      <button onClick={() => restartGame()}>Restart Game</button>
    </>
  )
}

export default App
