import React from 'react';

const register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Welcome to healCall</span>
                <span className='title'>Register</span>
                <form className='registerForm'>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='E-mail' />
                    <input type='password' placeholder='Password' />
                    <input style={{ display: "none" }} type='file' id='file' />
                    <label htmlFor='file'><img src="https://img.icons8.com/color/48/000000/add-image.png" alt='Image-Icon' />
                        <span>Add an avatar</span></label>
                    <button>SignUp</button>
                </form>
                <p>You do not have account? Login</p>
            </div>
        </div>
    )
}

export default register
