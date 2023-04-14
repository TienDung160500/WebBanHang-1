import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUser } from "../../../../store/user/UserAction";
import ListUser from "./ListUser"
import "./AdminUser.css"

const AdminUser = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.user)

    useEffect(() => {
        dispatch(GetAllUser())
    }, [dispatch])
    return (
        <div className="admin-user">
            <span>Customers</span>
            {
                users ? (<ListUser users={users}></ListUser>) : (<h2>Loading</h2>)
            }
        </div>
    )
}

export default AdminUser;