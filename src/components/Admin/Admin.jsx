import React from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
import Routes from "./components/Routes";
import Sidebar from "./components/SideBar/SideBar";
import "./Admin.css"

const Admin = () => {
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfor} = userSignin;
    const navigate = useNavigate();

    if (!userInfor || !userInfor.isAdmin ) {
        navigate("/")
    }
    

    return (
        <Routes>
            <Route
            render={() => (
                <div className={`layout`}>
                    <Sidebar />
                    <div className="layout_content">
                        <div className="layout_content_main">
                            <Routes />
                        </div>
                    </div>
                </div>
            )} ></Route>
        </Routes>
    );
}

export default Admin;