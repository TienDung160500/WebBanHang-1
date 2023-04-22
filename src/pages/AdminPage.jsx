import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Admin/components/SideBar/SideBar";
import "./AdminPage.css";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../components/LogIn/Login";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQR2MJow5pHq2lZ8GoCWLLPEJPgJqFggc",
  authDomain: "admins-28ca4.firebaseapp.com",
  projectId: "admins-28ca4",
  storageBucket: "admins-28ca4.appspot.com",
  messagingSenderId: "454969152458",
  appId: "1:454969152458:web:b6773bc7f6a51c814ef533",
  measurementId: "G-TP3EJX9TQT"
};
firebase.initializeApp(firebaseConfig);

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC29ROJricQYWM3TjKM7iA5PFdVhLbjK68",
//   authDomain: "levents-b7ba2.firebaseapp.com",
//   databaseURL:
//     "https://levents-b7ba2-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "levents-b7ba2",
//   storageBucket: "levents-b7ba2.appspot.com",
//   messagingSenderId: "353627585349",
//   appId: "1:353627585349:web:dd6462cd8778663af51c2c",
//   measurementId: "G-Q6576KRLH5",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

const AdminPage = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfor } = userSignin;
  const navigate = useNavigate();

  if (!userInfor || !userInfor.isAdmin) {
    navigate("/");
  }

  // Check admin

  const [user] = useAuthState(auth);
  const [userData, loading] = useDocumentData(
    firestore.collection("users").doc(user?.uid)
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  const adminEmail = "tiendung@gmai.com";

  const isAdmin = userData?.email === adminEmail;
  
  
  // const user = firebase.auth().currentUser;

  if (user) {
    user
      .getIdTokenResult()
      .then((idTokenResult) => {
        const isAdmin = !!idTokenResult.claims.admin;
        console.log(`Is admin? ${isAdmin}`);
         if (isAdmin) {
           // User is an admin, allow access to admin features.
         } else {
           // User is not an admin, restrict access to admin features.
         }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div>
        
        {user ? (
          <div>
            {isAdmin ? (
              <p>Chào mừng đến với trang quản trị</p>
            ) : (
              <p>Bạn không có quyền truy cập vào trang này</p>
            )}
            <button onClick={() => auth.signOut()}>Đăng xuất</button>
          </div>
        ) : (
          <Login />
        )}
      </div>

      <div className="admin">
        <div className="admin-sidebar">
          <Sidebar />
        </div>

        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
