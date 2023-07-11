const React = require('react');
const Layout = require('./Layout');

module.exports = function Deck({login}){
    return(
        <Layout login={login}>
            <link rel='stylesheet' href='/css/deck.css' />
            <script defer src='/js/deck.js' />
            <div className='parent'>
             <div>
                <button id='buttonAdd'>Создайте новую доску</button>
            </div>
            </div>
            <div id='cards'>
                <div class="card text-center mb-3" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                     </div>
            </div>
            </div> 
            
        </Layout>
    )
}