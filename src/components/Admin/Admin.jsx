import React from "react";
import { useSelector } from "react-redux";
import { Route, Router, Routes, unstable_HistoryRouter } from "react-router-dom";
import Sidebar from "./components/SideBar/SideBar";

const Admin = () => {
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfor} = userSignin;
    const history = unstable_HistoryRouter();

    if (!userInfor || !userInfor.isAdmin ) {
        history.push("/")
    }

    return (
        <Router>
            <Route
            render={(props) => (
                <div className={`layout`}>
                    <Sidebar />
                    <div className="layout_content">
                        <div className="layout_content_main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            )} ></Route>
        </Router>
    );
}

export default Admin;