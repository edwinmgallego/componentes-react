import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './assets/componentes/cards/cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cards/>

    </>
  )
}

export default App
