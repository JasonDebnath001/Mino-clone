import React from 'react'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Statement from './component/Statement'
import StoriesReveal from './component/StoriesReveal'
import Mission from './component/Mission'
import TrustReveal from './component/TrustReveal'
import Footer from './component/Footer'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Statement />
      <StoriesReveal />
      <Mission />
      <TrustReveal />
      <Footer />
    </main>
  )
}

export default App