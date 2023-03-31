import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, unstable_HistoryRouter, useFormAction } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const history = unstable_HistoryRouter();

    const {
        register,
        handleSubmit,
        // watch,
        formState: {},

    } = useFormAction();

    const user = useSelector((state) => state.userSignin);
    const {userInfor, error} = user;

    const onSubmit = (data) => {
        dispatch(
            // login(data)
            );
    };

    useEffect(() => {
        if (userInfor) {
            history.push("/login")
        }
    });

    return (
        <div className="login-page">
            <h2>đăng nhập</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} placeholder="Email" required/>
                <input 
                {...register("password")}
                placeholder="Password"
                type={"password"}
                required></input>

                <input type={"submit"} value="Đăng nhập"></input>
                {error ? <h2>{error}</h2> : <></>}
                <Link to ="/register">Bạn chưa có tài khoản<span>Đăng ký</span></Link>
            </form>
        </div>
    )
}

export default Login;