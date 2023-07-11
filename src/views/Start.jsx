const React = require('react');
const Layout = require('./Layout');

module.exports = function Start(){
    return(
        <Layout>
        <link rel='stylesheet' href='/css/start.css' />
        <div className='parent'>
            <div id='startDiv'>Организуйте работу и жизнь.<br/>
            To Do List поможет вам обрести концентрацию, организованность и покой.</div>
        </div>
        
        </Layout>
    )
}