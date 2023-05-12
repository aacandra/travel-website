import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Popular from './Components/Popular/Popular'
import LatestPromo from './Components/Promo/LatestPromo'

// function App() {
//   const [count, setCount] = useState(0)

const App = () => {

 return (
    <>
       <Navbar/>
       <Home/>
       <Popular/>
       <LatestPromo/>
       <Footer/>

 
      
    </>
  )
}

export default App
