import React from "react";

const Footer = (props) => {
    const {myname, email} = props;
    return (
        <div className="container-fluid bg-white" style={{height: '80px' }}>
            <div className="text-center text-uppercase">
                <br/>
                <small style={{fontSize:'18px'}}>
                    <span className="text-primary" >Powered By {myname}</span> |<span className="text-success"> Contact By Email : {email}</span>
                </small>
            </div>
        </div>
    )
}

export default Footer;