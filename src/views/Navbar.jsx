const React = require('react');

module.exports = function Navbar(){
    return(
        <div>
        <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/registration">Registration</a></li>
            <li className='home'><a href="/registration">Home</a></li>
        </ul>
        </div>
        
    )
}