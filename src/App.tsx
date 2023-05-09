import './App.css'
import Square from './components/Square'

function App() {

  function handleClick(){
    console.log("Clicked!")
  }

  return (
    <>
      <div>App</div>  
      <div>       
        <Square handleClick={handleClick}> </Square>
        <Square> </Square>
        <Square> </Square>
      </div>
      <div>       
        <Square> </Square>
        <Square> </Square>
        <Square> </Square>
      </div>
      <div>       
        <Square> </Square>
        <Square> </Square>
        <Square> </Square>
      </div>
    </>
  )
}

export default App
