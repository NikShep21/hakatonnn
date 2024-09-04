import { Route,Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import HomePage from "./components/pages/homePage/HomePage"
import Map from "./components/pages/map/Map"
import NeuroNet from "./components/pages/neuronet/NeuroNet"
import Statistics from "./components/pages/statistics/Statistics"
function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index  element ={<HomePage/>}/>
            
            <Route path="/model" element={<NeuroNet/>}/>
            <Route path="/statistics" element={<Statistics/>}/>
            <Route path="/map" element={<Map/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
