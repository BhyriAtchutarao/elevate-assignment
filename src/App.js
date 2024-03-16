import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from "./Home/index.js"
import Products from "./Products/index.js"
import Header from "./Header/index.js"
import ProductItemDetails  from './ProductItemDetails/index.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/products" element={<Products/>} ></Route>
        <Route path = "/products/:id" element={<ProductItemDetails />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
