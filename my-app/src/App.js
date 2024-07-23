import './App.css';
import {Route, Routes} from "react-router-dom";
import Confirmation from "./Componants/Confirmation";
import SignUp from "./Componants/SignUp";
import Login from "./Componants/Login";
import Adminlogin from "./Componants/Adminlogin";

import Category from "./Componants/Category";
import Souscategory from "./Componants/Souscategory";

import Types from "./Componants/Types";
import ProductList from "./Componants/ProductList/ProductList";

import Product_info from "./Componants/Product_info";
import Panier from "./Componants/Panier";
import AdminProductlist from "./Componants/AdminProductlist";
import Dashboard from "./Componants/Dashboard";
function App() {


    return (

    <div className="App">


      <Routes>
        <Route path="/confirmation/:activationcode" element={<Confirmation/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Productlist" element={<ProductList/>} />
        <Route path="/productinfo/:id" element={<Product_info/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<Adminlogin/>} />
        <Route path="/admin/Categorie" element={<Category/>} />
        <Route path="/admin/sousCategory/:id" element={<Souscategory/>} />
        <Route path="/admin/sousCategory/types/:id" element={<Types/>} />
        <Route path="protos" element={<Panier/>} />
        <Route path="adminprod" element={<AdminProductlist/>} />
        <Route path="dashboard" element={<Dashboard/>} />



      </Routes>
        </div>

   );
}

export default App;
