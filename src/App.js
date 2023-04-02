import Navbar from "../src/components/Navbar"
import Home from "../src/routes/Home"
import Sepet from "../src/routes/Sepet"
import Yoresel from "../src/routes/yoresel"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yoresel" element={<Yoresel />} />
          <Route path="/sepet" element={<Sepet />} />
        </Routes>
      </div>
    </>
  )
}

export default App
