import { Route, Routes } from "react-router-dom"
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PromptImprover from './components/PromptImprover'
import Stats from './components/Stats'
import Register from "./components/Register"
import Login from "./components/Loogin"
Login
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={[
          <Hero key={1} />,
          <PromptImprover key={2} />,
          <Features key={3} />,
          <About key={4} />,
          <Stats key={5} />,
          <Contact key={6} />
        ]} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
