import React from 'react';
import {GoogleLogout} from "react-google-login";

const clientId = "515863593492-uf7lljvdrh4oh76qn2c9jt1jrosh1tnh.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        console.log("Log out Successfull");
    }
    return (
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;