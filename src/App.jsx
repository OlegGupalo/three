import { BrowserRouter, Routes } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components"

function App() {
  return (
    <BrowserRouter>
      <div className={`relative z-0 bg-primary`}>
        <div className={`bg-hero-pattern bg-cover bg-no-repeat bg-center`}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Feedbacks />
        <div className={`relative z-0`}>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
