import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductDetails from "../Pages/ProductDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route,Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

export default function AllRoutes(){

    return <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<PrivateRoutes><Home/></PrivateRoutes>}/>
                <Route path="/home" element={<PrivateRoutes><Home/></PrivateRoutes>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/productdetails" element={<PrivateRoutes><ProductDetails/></PrivateRoutes>}/>
            </Routes>
            <Footer/>
    </>
}