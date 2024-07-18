import { useState } from 'react'

import './App.css';
import Navbar from './Compontents/navbar/Navbar';
import Hero from './Compontents/hero/Hero';
import About from './Compontents/about/About';
import Product from './Compontents/product/Product';
import Footer from './Compontents/footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Footer />
    </>
        )
}

        export default App
