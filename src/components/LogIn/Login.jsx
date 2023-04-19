import { Checkbox } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useHref, useNavigate } from "react-router-dom";
import { login } from "../../store/user/UserAction";
import "./Login.css"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useState } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";

const config = {
    apiKey: process.env.REACT_APP_API_ADMIN_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

const Login = () => {

    // useEffect(() => {
        
    // }, []);
    // const dispatch = useDispatch();
    // const history = useHref();

    // // const [token, setToken] = useState();

    // // if(!token) {
    // //     return <Login setToken={setToken}/>
    // // }

    // const uiConfig = {
    //     // Popup signin flow rather than redirect flow.
    //     signInFlow: 'redirect',
    //     signInSuccessUrl: '/',

    //     signInOptions: [
    //         firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //     ],
    //     callbacks: {
    //       // Avoid redirects after sign-in.
    //       signInSuccessWithAuthResult: () => false,
    //     },
    //   };

    //     useEffect(() => {
    //         const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
    //             if(!user) {
    //                 console.log("user not logged in");
    //                 return;
    //             }
    //             console.log({ user: user.email });
    //             console.log({ user })
    //         });
    //         return () => unregisterAuthObserver();
    //     }, []);
    

    // const {
    //     register,
    //     handleSubmit,
    //     // watch,
    //     // formState: {},

    // } = useState();

    const user = useSelector((state) => state.userSignin);
    const { userInfor, error } = user;
      const navigate = useNavigate();

    // const onSubmit = (data) => {
    //     dispatch(login(data));
    // };

    // useEffect(() => {
    //     if (userInfor) {
    //         history.push("/")
    //     }
    // });

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // }

    // const handlePasswordChange = (event) => { 
    //     setPassword(event.target.value);
    // }

    // const handleSubmit = (event) => { 
    //     event.preventDefault();
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
      event.preventDefault();
      //     signInSuccessUrl: '/',

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Đăng nhập thành công.", userCredential.user);
            navigate('/admin')
        })
        .catch((error) => {
          console.error("Lỗi đăng nhập: " + error);
        });
    };

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };

    return (
      <div className="login-page">
        <div className="form-login-page">
          <h2>đăng nhập</h2>
          <form onSubmit={handleLogin} class="form-login">
            <div className="form-text">
              Bạn chưa có tài khoản?
              <Link to="/register">
                <a> Đăng ký</a>
              </Link>
            </div>

            <input
              // {...register}
              placeholder="Email hoặc Số điện thoại"
              required
              className="form-input-login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              // {...register}
              placeholder="Mật khẩu"
              value={password}
              type={"password"}
              required
              className="form-input-login"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <div className="form-check">
              <Checkbox className="form-checkbox" onChange={onChange}>
                Ghi nhớ đăng nhập
              </Checkbox>
            </div>
            <div className="bot-form-login">
              <a href="">Quên mật khẩu?</a>
            <button
                onClick={handleLogin}>Đăng nhập</button>
            </div>
            {/* <StyledFirebaseAuth 
                    uiConfig={uiConfig} 
                    firebaseAuth={firebase.auth()} 
                    /> */}

            {error ? <h2>{error}</h2> : <></>}
          </form>
        </div>
      </div>
    );
}

export default Login;