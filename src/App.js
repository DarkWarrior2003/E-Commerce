import "./App.css";
import Footer from "./components/Footer";

import NavBar from "./components/NavBar";
import {  Routes, Route } from "react-router-dom";
import Product from "./components/Product/Product";

import Home from "./components/Home/Home";
import ShopCategory from "./components/ShopCategory/ShopCategory";
import SearchPage from "./components/Search/SearchPage";
function App() {
  return (
    <>
      <NavBar />
   
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productID" element={<Product />}></Route>
          </Route>
          <Route path="/search" element={<SearchPage/>} ></Route>
          <Route path="/dslr" element={<ShopCategory category="DSLR"/>}/>

        </Routes>

        <Footer />
      
    </>
  );
}

export default App;
