const React = require("react");
const Layout = require("./Layout");

module.exports = function Deck({ login, deck }) {
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="/css/deck.css" />
      {/* <script
        src="https://kit.fontawesome.com/d5b51f3ffe.js"
        crossOrigin="anonymous"
      ></script> */}
      <script defer src="/js/deck.js" />
      <div className="parent">
        <div>
          <button
            id="buttonAdd"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Создайте новую доску
          </button>
        </div>
      </div>
      <div className="container">
        {deck.length ? (
          deck.map((el) => (
            <div className="cardsDiv">
              <div className="card text-center mb-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <a href={`/deck/${el.id}`} className="btn btn-primary">
                    Go somewhere
                  </a>
                  <span className="delete-icon">
                    <i className="far fa-trash-alt"></i>
                  </span>
                  <div className={el.id}></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3>У вас пока нет досок</h3>
        )}
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
              <form name="createDeck">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Title:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="title"
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
  );
};
