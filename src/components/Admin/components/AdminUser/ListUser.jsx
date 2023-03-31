import React from "react";
import User from "./User";

const ListUser = (props) => {
    const {user} = props;

    return (
        <div className="admin-user-list">
            <table>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
                {
                    user.map((item, index) => (<User user={item} number={index}></User>))
                }
            </table>
        </div>
    )
}

export default ListUser;