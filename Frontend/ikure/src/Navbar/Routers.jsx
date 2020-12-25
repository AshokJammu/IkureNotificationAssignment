import React from "react"
import { Route } from "react-router-dom";
import Home from "../components/Home";
import HomeNavbar from "../components/HomeNavbar";
import Login from "../components/Login";
import Notification from "../components/Notification";
import Register from "../components/Register";
 
 
const Routers =()=>{
    return(
        <>
            <Route path="/" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin/dashboard/all" component={HomeNavbar}/>
            {/* <Route path="/admin/dashboard/all" component={Notification}/> */}
            {/* <Route path="/reports" component={Reports}/> */}
        </>
    )
}
export default Routers