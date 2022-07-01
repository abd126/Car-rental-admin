import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../pages/Home';
import Categories from '../screens/Categories';
import EditCatrgory from '../screens/EditCatrgory';
import Product from '../screens/Products';
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route  path='/' element={<Home />}/>
      <Route path="/categories" element={<Categories/>} />
      <Route path="/products" element={<Product/>} />
      <Route path="/edit-category/:id" element={<EditCatrgory />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default Router