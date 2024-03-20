import React from "react";
import googleIcon from '/assets/icons/google.svg';
import gitIcon from '/assets/icons/github.svg';


const LoginBtnGroup = () => {
    return(
        <div className="btn-group">
            <div className="btn-group_item">
                <div className="btn_item_icon">
                    <img src={googleIcon} alt="icon" />
                </div>
                <p className="btn_item_text">Google</p>
            </div>

            <div className="btn-group_item">
                <div className="btn_item_icon github_icon">
                    <img src={gitIcon} alt="icon" />
                </div>
                <p className="btn_item_text">Github</p>
            </div>
        </div>
    )
}

export default LoginBtnGroup;