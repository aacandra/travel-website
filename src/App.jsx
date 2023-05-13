import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Popular from './Components/Popular/Popular'
import LatestPromo from './Components/Promo/LatestPromo'
import LatestCategories from './Components/Category/LatestCategories'
import Services from './Components/Services/Services'

// function App() {
//   const [count, setCount] = useState(0)

const App = () => {

 return (
    <>
       <Navbar/>
       <Home/>
       <Services/>  
       <LatestCategories/>
       <Popular/>
       <LatestPromo/>
       <Footer/>

 
      
    </>
  )
}

export default App
