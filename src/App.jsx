import { Routes, Route } from 'react-router-dom'
import DeckLayout from './layouts/DeckLayout'
import Home from './pages/Home'
import Security from './pages/Security'
import Conditions from './pages/Conditions'
import Services from './pages/Services'
import Return from './pages/Return'

function App() {
  return (
    <DeckLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/security" element={<Security />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/services" element={<Services />} />
        <Route path="/return" element={<Return />} />
      </Routes>
    </DeckLayout>
  )
}

export default App
