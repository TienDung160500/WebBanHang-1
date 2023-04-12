import { Button } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormAction } from "react-router-dom";
import { SignupUser } from "../../store/user/UserAction";
import "./SignUp.css"

const Register = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const {
        register,
        handleSubmit,
        // formState: {}
    } = useFormAction();

    const onSubmit = data => {
        if (password === confirmPassword) {
            dispatch(
                SignupUser(data)
            )
        }else  {
            alert("Tên đăng nhập hoặc mật khẩu sai, vui lòng kiểm tra lại")
        }
    }

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };

    return (
        <div className="signup-page">
            <h2>tạo tài khoản</h2>
            <form onSubmit={(onSubmit)}>
                <input 
                {...register
                } placeholder="Họ và tên"/>

                <input {...register}
                placeholder="Email"
                type="email"
                required/>

                <input 
                {...register}
                placeholder="Số điện thoại"
                type="text"
                required/>

                <input 
                {...register}
                placeholder="Ngày sinh"
                type="Date"
                required/>

                <input 
                {...register}
                placeholder="Mật khẩu"
                onChange={(e) => setPassword(e.target.value)}
                required/>

                <input 
                {...register}
                placeholder="Xác nhận mật khẩu"
                type={password}
                onChange={(e) => setconfirmPassword(e.target.value)}
                required/>
                
                <div className="form-check">
                    <Checkbox onChange={onChange}>Tôi đồng ý với các điều khoản và điều kiện, chính sách bảo mật và chính sách cookie</Checkbox>
                </div>

                <div className="button-register">
                    <Button type="primary">Tạo</Button>
                </div>
                <p>Nếu sđt hoặc email của bạn đã tồn tại, bấm <a href="/login">vào đây</a> và login với sđt hoặc email đó với một mật khẩu bất kỳ để kích hoạt tài khoản hoặc liên hệ với bộ phận cskh của Levents để được hỗ trợ</p>
            </form>
        </div>
    )
}

export default Register;