import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>healCall</span>
            <div className='user'>
                <img src='https://avatars.githubusercontent.com/u/97824765?v=4'/>
                <span>Chirag</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
