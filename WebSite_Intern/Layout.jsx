import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import SliderComponent from './Components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header />
      <Banner />
      <SliderComponent />
      
    </>
  )
}

export default App
