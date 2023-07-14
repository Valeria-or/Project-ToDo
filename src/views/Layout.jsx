const React = require('react');
const Navbar = require('./Navbar');
const NavbarLogin = require('./NavbarLogin');


module.exports = function Layout({children, login}){
    return(
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet" />
            <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        <link type="image/x-icon" href="/img/favicon.ico" rel="shortcut icon"></link>
            <link rel='stylesheet' href='/css/index.css' />
            {/* <link rel='stylesheet' href='/css/navbar.css' /> */}
            <script
        src="https://kit.fontawesome.com/d5b51f3ffe.js"
        crossOrigin="anonymous"
      ></script>
            <title>To Do List</title>
        </head>
        <body>
            { login? 
            <NavbarLogin login={login}/>
            : 
            <Navbar />
            }
            {children}
            <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        />
        </body>
        </html>
    )
}