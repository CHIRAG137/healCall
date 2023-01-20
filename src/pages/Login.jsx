import React from 'react';

const login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Welcome to healCall</span>
                <span className='title'>Login</span>
                <form className='registerForm'>
                    <input type='email' placeholder='E-mail' />
                    <input type='password' placeholder='Password' />
                    <button>Login</button>
                </form>
                <p>You do not have account? Register</p>
            </div>
        </div>
    )
}

export default login
