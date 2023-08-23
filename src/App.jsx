import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Header from "./Components/Header/Header"
import CharacterDetails from "./Pages/CharacterDetails/CharacterDetails"

function App() {


  return (
    <div className="App" >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<CharacterDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
