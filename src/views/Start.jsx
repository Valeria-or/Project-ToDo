const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

module.exports = function Start(){
    return(
        <Layout >
        <link rel='stylesheet' href='/css/start.css' />
        <Navbar />
        <div className='parent'>
            <div id='startDiv'>Организуйте работу и жизнь.<br/>
            To Do List поможет вам обрести концентрацию, организованность и покой.</div>
        </div>
        
        </Layout>
    )
}