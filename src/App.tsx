import { useState, useEffect } from 'react';
import './App.css'
import Square from './components/Square'

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerPlaying, setPlayerPlaying] = useState("X")
  const [gameResult, setGameResult] = useState<string | null>(null)

  useEffect(() => {
    let winner: string | null = checkForWinner()
    if (winner) {
      setGameResult (`${winner} won`)
    } else if (!winner && !squares.includes(null)) {
      setGameResult (`It's a tie`)
    } 
  }, [squares])

  function handleClick(index: number){
    //Prevents changing the value while clicking on an already clicked square
    //or when we have a winner
    if (squares[index] || checkForWinner()) {
      return
    }

    const newSquares = squares.slice()
    newSquares[index] = playerPlaying
    playerPlaying === "X" ? setPlayerPlaying("O") : setPlayerPlaying("X")
    setSquares(newSquares)
  }

  function checkForWinner() {
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
        res = squares[a];
      }
    });
    return res;
  }

  function restartGame(){ 
    setSquares(Array(9).fill(null))
    setPlayerPlaying("X")
    setGameResult(null)
  }

  return (
    <>
      <div>{gameResult || <>{playerPlaying} is playing</>}</div>
      <div className="board">
        {squares.map((square, i): React.ReactNode => {
          return (
            <Square
              key={i}
              index={i}
              handleClick={(index) => handleClick(index)}
            >
              {square}
            </Square>
          );
        })}
      </div>
      {<button 
        className={gameResult ? '' : 'hide'} 
        onClick={() => restartGame()}
      >
        Restart Game
      </button>}
    </>
  );
}

export default App
