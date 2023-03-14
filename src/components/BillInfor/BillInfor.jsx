import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BillInfor.css"

const BillInfor = () => {
    const [isCheckBox, setIsCheckbox] = useState(false);
    const [isNoSpam, setIsNoSpam] = useState(false);
    const [agreeTerm, setAgreeTerm] = useState(false);

    const handleCheckBox = () => {
        setIsCheckbox(!isCheckBox);
    };

    const handleNoSpam = () => {
        setIsNoSpam(!isNoSpam);
    };

    const handleAgreeTerm = () => {
        setAgreeTerm(!agreeTerm);
    };

    return (
        <form className="m-billing-infor">
            <h2>thông tin giao hàng</h2>

            <div className="enter-m-billing-infor">
                <p>Xin hãy nhập đầy đủ thông tin thanh toán của bạn</p>
            </div>

            <div className="m-billing-field-name">
                <div className="m__small-billing-field-name">
                    <input type="text" className="name" placeholder="Họ và tên"/>
                </div>
            </div>

            <div className="m-billing-field" >
                <div className="m__small-billing-field">
                    <input type="text" className="email" placeholder="Email"/>
                </div>
                <div className="m__small-billing-field">
                    <input type="text" className="phone-number" placeholder="Số điện thoại"/>
                </div>
            </div>

            <div className="m-billing-field">
                <div className="m__small-billing-field">
                    <input type="text" placeholder="Ngày sinh"/>
                </div>
                <div className="m__small-billing-field">
                    <input type="text" placeholder="Địa chỉ"/>
                </div>
            </div>

            <div className="m-billing-field">
                <div className="m__small-billing-field-location">
                    <input type="text" placeholder="Tỉnh/Thành phố*"/>
                </div>
                <div className="m__small-billing-field-location">
                    <input type="text" placeholder="Quận/Huyện*"/>
                </div>
                <div className="m__small-billing-field-location">
                    <input type="text" placeholder="Phường*"/>
                </div>
            </div>

            <div className="b-billing-field">
                <div className="billing-feild-form-bot">
                    <Link to="" className="continue">Tiếp tục mua sắm</Link>
                    <div class="bt-button-1">Tiếp tục</div>
                </div>
            </div>
        </form>
    )
}

export default BillInfor;