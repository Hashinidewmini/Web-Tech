import { useState } from 'react'
import Homepage from './componets/Homepage/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './componets/Menu/Menu'
import Shop from './componets/Shop/Shop'
import TableBook from './componets/TableBook/TableBook'
import About from './componets/AboutUs/About'
import Facilities from './componets/Facilities/Facilities'
import Orders from './componets/Orders/Orders'

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
          <Route path="/about-us" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
