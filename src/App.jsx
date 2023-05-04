import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './assets/Form'
import Add from './assets/Comments'

function App() {
  const [count, setCount] = useState(0)
  
  
  return (
    <div className="App" style={{ display: "flex" }}>
    
      <div style={{ width: "50%" }}>
        {" "}
        <Forms />
      </div>
      <div>
        <Add />{" "}
      </div>
    </div>
  );
}

export default App
