import React from 'react'

export const Header = () => {
  return (
    <>
    <div className='navbar'>
        <div className='logo'>
            <img src='logo.png' alt='Logo' />
        </div>
        <nav className='nav'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

        </nav>
        <div className='connexion'>
            <div>Support</div>
            <div>Login</div>
            <button>Start Free</button>
        </div>
    </div>
    
    </>
  )
}
