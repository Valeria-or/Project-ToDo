const React = require('react');

module.exports = function Navbar(){
    return(
        <>
        <link rel='stylesheet' href='/css/navbar.css' />
        <div>
        <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/registration">Registration</a></li>
            <li className='home'><a href="/">Home</a></li>
        </ul>
        </div>
        </>
    )
}