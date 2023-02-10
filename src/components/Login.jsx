import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/user/userSlice';
import './Login.css';

const Login = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const loginUser = (e) =>{
        e.preventDefault();
        dispatch(login(true));
        navigator('/')
    }
    return (
        <div className='logincover'>
            <p className='logintitle'>Login</p>
            <form onSubmit={(e)=>loginUser(e)}>
                <div className='userId'>
                    <div><input type="text" id="userId"  placeholder='ID'/></div>
                </div>
                <div className='userPw'>
                    <div><input type="password" id="userPass" placeholder='PASSWORD'/></div>
                </div>
                <div className='lgn-box'>
                    <input id="loginBtn"type="submit" value="Continue">
                    </input>
                 </div>
            </form>
        </div>
    );
};

export default Login;