const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');

module.exports = function Login(){
    return(
        <Layout>
            <link rel='stylesheet' href='/css/forms.css' />
            <script defer src='/js/login.js' />
            <Navbar />
            <div id='divStyle'>
            <div id='formDiv'>
              <form className='loginForm'>
                <label>Логин: </label>
                <input type='email' placeholder='Введите email' name='login'></input>
                <label>Пароль: </label>
                <input type='password' placeholder='Введите пароль' name='password'></input>
                <button type='submit' className='buttonReg'>Войти</button>
                <div className='message'></div>
            </form> 
            </div>
            </div>
        </Layout>
    )
}