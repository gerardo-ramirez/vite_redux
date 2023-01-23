import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { LayoutContainer } from './styled-components/layout.styled.component'

function App() {
  const [count, setCount] = useState(0)

  return (
  <> <Navbar/>
      <LayoutContainer>
         <Home/>
      </LayoutContainer>
  </>
     )
}

export default App
