import { BrowserRouter,Route,Routes } from "react-router-dom"
import Products from "./pages/products"
import Home from "./pages/Home"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product/:id" element={<Products/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
