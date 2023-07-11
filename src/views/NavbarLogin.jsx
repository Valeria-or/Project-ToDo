const React = require('react');
const Layout = require('./Layout');

module.exports = function NavbarLogin({login}){
    return(
        <>
            <link rel='stylesheet' href='/css/home.css' />
            <script defer src='/js/home.js' />
            <div className="sidenav">
                <div className='divPhoto'>
                  <img className='photo' src="/img/chel.webp"></img>  
                </div>
                <a href="/profile">{login}</a>
                <a href="/deck">Deck</a>
                <a href="/tracker">Tracker</a>
                <a href="/list">List</a>
                <a href="/calendar">Calendar</a>
                <a href="/logout">Logout</a>
            </div>
            </>
    )
}