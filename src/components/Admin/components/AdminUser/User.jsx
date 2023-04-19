import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, GetAllUser } from "../../../../store/user/UserAction";

const User = (props) => {
    const {user, number} = props;
    const dispatch = useDispatch();
    const handleDeleteUser = async (user) => {
        dispatch(deleteUser(user._id))
        dispatch(GetAllUser())
    }

    return (
        <tr>
            <td>{number + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td 
            className="delete-user"
            onClick={() => handleDeleteUser(user)}>delete</td>
        </tr>
    )
}

export default User;