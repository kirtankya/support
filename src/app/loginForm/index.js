import React from 'react'
import './loginForm.scss';
import { MdMailOutline } from 'react-icons/md';
import { IoLockClosed } from 'react-icons/io5';



export default function LoginForm() {
    return (
        <div className='main'>
            <div className="loginForm">
                <h2>Login</h2>
                <div className="loginForm_aligment">
                    <MdMailOutline className='email-icon' />
                    <input type="email" name="email" id="" />
                </div>
                <div className="loginForm_aligment">
                    <IoLockClosed className='pass-icon' />
                    <input type="password" name="password" id="" />
                </div>
                <div className="button">
                    <button>Login</button>
                </div>
                <a href="">ForgetPassword?</a>
            </div>
        </div>
    )
}
