const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg(){
    return(
        <Layout>
            <link rel='stylesheet' href='/css/forms.css' />
            <script defer src='/js/register.js' />
            <div id='divStyle'>
                <div id='formDiv'>
              <form className='regForm'>
                <label>Имя: </label>
                <input type='text' placeholder='Введите ваше имя' name='name'></input>
                <label>Логин: </label>
                <input type='email' placeholder='Введите email' name='login'></input>
                <label>Пароль: </label>
                <input type='password' placeholder='Введите пароль' name='password'></input>
                <button type='submit' className='buttonReg'>Зарегистрироваться</button>
                <div className='message'></div>
            </form> 
            </div>
            </div>
            
        </Layout>
    )
}