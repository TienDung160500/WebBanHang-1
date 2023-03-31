import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormAction } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const {
        register,
        handleSubmit,
        formState: {}
    } = useFormAction();

    const onSubmit = data => {
        if (password === confirmPassword) {
            dispatch(
                // SignupUser(data)
            )
        }else  {
            alert("Tên đăng nhập hoặc mật khẩu sai, vùi lòng kiểm tra lại")
        }
    }

    return (
        <div className="signup-page">
            <h2>đăng ký</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Họ và tên"></input>

                <input
                {...register("email")}
                placeholder="Email"
                type={"email"}
                required></input>

                <input
                {...register("phonenumber")}
                placeholder="Số điện thoại"
                type={Number}
                required></input>

                <input 
                {...register("birthday")}
                placeholder="Ngày sinh"
                type={Date}
                required></input>

                <input
                {...register("password")}
                placeholder="Mật khẩu"
                onChange={(e) => setPassword(e.target.value)}
                required></input>

                <input
                {...register("repeatpassword")}
                placeholder="Xác nhận mật khẩu"
                type={password}
                onChange={(e) => setconfirmPassword(e.target.value)}
                required></input>

                <input type={"radio"}>Tôi đồng ý với các điều khoản và điều kiện, chính sách bảo mật và chính sách cookie</input>
                <input type={"submit"}>Tạo</input>
                <p>Nếu sđt hoặc email của bạn đã tồn tại, bấm <span>vào đây</span> và login với sđt hoặc email đó với một mật khẩu bất kỳ để kích hoạt tài khoản hoặc liên hệ với bộ phận cskh của Levents để được hỗ trợ</p>
            </form>
        </div>
    )
}

export default Register;