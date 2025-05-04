import { useState } from 'react'
import Homepage from './componets/Homepage/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './componets/Menu/Menu'
import Shop from './componets/Shop/Shop'
import TableBook from './componets/TableBook/TableBook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shops" element={<Shop />} />
          <Route path="/tablebooking" element={<TableBook />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
