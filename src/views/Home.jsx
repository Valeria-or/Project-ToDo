const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({login}){
    return(
        <Layout login={login}>
            <link rel='stylesheet' href='/css/homePage.css' />
            <script defer src='/js/home.js' />
            <div className='parent'>
               <div className="main"></div> 
            </div>
            
        </Layout>
    )
}