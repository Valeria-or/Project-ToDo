const React = require("react");
const Layout = require("./Layout");

module.exports = function DeckList({ login, title }) {
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="/css/deckList.css" />
      <script defer src="/js/deckList.js" />
      <div id="parentDiv">
        <div id="conteiner">
            <h1 id="title">{title}</h1>
            <hr/>
          <div id="body">
            <div id="list">
              <div className="todo">
                <input type="checkbox" className="check" />
                <span className="text">pok</span>
                <span className="delete-icon">
                  <i className="far fa-trash-alt"></i>
                </span>
              </div>

              <div className="todo">
                <input type="checkbox" className="check"/>
                <span className="text">pok</span>
                <span className="delete-icon">
                  <i className="far fa-trash-alt"></i>
                </span>
              </div>

              <div className="todo">
                <input type="checkbox" className="check"/>
                <span className="text">pok</span>
                <span className="delete-icon">
                  <i className="far fa-trash-alt"></i>
                </span>
              </div>
            </div>
            <div id="add">
              <input type="text" id="addText"></input>
              <span id="buttonAdd">
                 <i className="fa-regular fa-square-plus"></i>
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
};
