
import Home from "../src/routes/home/home.component"
import Navigation from "../src/routes/navigation/navigation.component";

import Sepet from "../src/routes/Sepet"
import Yoresel from "../src/routes/yoresel/yoresel"

import { Routes, Route } from "react-router-dom"
import KayıtOl from "./routes/sign-in/sign-in.component";




const App = () => {
  return (
        <Routes>
         <Route path="/" element={<Navigation />}>
             <Route  index element={<Home />} />
             <Route path="/yoresel" element={<Yoresel />} />
              <Route path="sepet" element={<Sepet />} />
              <Route path="sign-in" element={<KayıtOl/>}></Route>
          </Route>
        </Routes>
  );
}

export default App
