import React from 'react';
import {GoogleLogin} from "react-google-login";

const clientId = "515863593492-uf7lljvdrh4oh76qn2c9jt1jrosh1tnh.apps.googleusercontent.com"

function Login() {
    const  onSuccess = (res) => {
        console.log("Login Sucess", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("Login Failed", res)
    }
    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true} />
        </div>
    )
}
export default Login;