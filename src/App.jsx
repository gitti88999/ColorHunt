import { Outlet } from 'react-router-dom'
import './App.css'
import Logo from './components/Logo/Logo'
import All from './components/All/All'

function App() {

  return (
    <>
     <Logo></Logo>
    <div style={{display:'flex'}}>
      
    <Outlet></Outlet>
    </div>
    
    </>
  )
}

export default App
