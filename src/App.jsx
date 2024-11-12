import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Footer from './components/footer'
import Mid from './components/mid'
import LowerMid from './components/lowerMid'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero image={"../../public/images/shoe_3.webp"}/>
      <Hero image={"../../public/images/shoe_2.webp"}/>
      <Mid/>
      <Hero image={"../../public/images/shoe_5.webp"}/>
      <LowerMid/>
      <Hero image={"../../public/images/shoe_4.webp"}/>
      <Footer/>
    </>
  )
}

export default App
