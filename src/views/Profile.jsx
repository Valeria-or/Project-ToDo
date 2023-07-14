const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({login, user}){
    return(
        <Layout login={login}>
            <link rel='stylesheet' href='/css/profile.css' />
            <script defer src='/js/profile.js' />
            <div className='parentProfile'>
            <div className='mainProfile'>
                  <img className='photoDiv' src="/img/chel.webp"></img>  
            </div>
            <div className="mainProfile">{user.name}</div>
            <div className="mainProfile">{user.login}</div> 
            <button className="mainProfile" id="change" data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo">Изменить</button> 
            </div>
            
            <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New deck
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form name="changeProfile">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="recipient-name"
                    name="name"
                    value={user.name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Login:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="recipient-name"
                    name="login"
                    value={user.login}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
                <div className="message"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </Layout>
    )
}