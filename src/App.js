
import Home from "../src/routes/home/home.component"
import Navigation from "../src/routes/navigation/navigation.component";

import Sepet from "../src/routes/Sepet"
import Yoresel from "../src/routes/yoresel"

import { Routes, Route } from "react-router-dom"


const App = () => {
  return (
        <Routes>
         <Route path="/" element={<Navigation />}>
             <Route  index element={<Home />} />
             <Route path="yoresel" element={<Yoresel />} />
              <Route path="sepet" element={<Sepet />} />
          </Route>
        </Routes>
  );
}

export default App
