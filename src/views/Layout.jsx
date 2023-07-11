const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({children}){
    return(
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet" />
            <link rel='stylesheet' href='/css/index.css' />
            <link rel='stylesheet' href='/css/navbar.css' />
            <title>To Do List</title>
        </head>
        <body>
            <Navbar />
            {children}
        </body>
        </html>
    )
}