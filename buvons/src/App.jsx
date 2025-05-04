import { useState } from 'react'
import Homepage from './componets/Homepage/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './componets/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
