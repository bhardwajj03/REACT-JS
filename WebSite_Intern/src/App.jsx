import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import SliderComponent from './Components/Slider'
import About from './Components/About/About'
import Product from './Components/product'
import Home from "./Components/Home/Home"
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header />
    
      <Banner />
      <SliderComponent />
      <Home />
      <Product />

      <About />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
