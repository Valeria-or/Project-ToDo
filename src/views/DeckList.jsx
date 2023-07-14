const React = require("react");
const Layout = require("./Layout");

module.exports = function DeckList({ login, card, todo }) {
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="/css/deckList.css" />
      <script defer src="/js/deckList.js" />
      <div id="parentDiv">
        <div id="conteiner">
            <h1 id="title">{card.title}</h1>
            <hr/>
          <div id="body">
            <div id="list">
            {todo.length ? (
          todo.map((el) => (
            <>
            <div className="todo" id={el.id} key={el.id}>
                {
                    el.checked ?
                    <input type="checkbox" className="check" defaultChecked/>
                    :
                    <input type="checkbox" className="check" />
                }
                <span className="text">{el.body}</span>
                <span className="delete-icon">
                  <i className="far fa-trash-alt"></i>
                </span>
              </div>
              </>
          )))
          :
          (<h3 id="no">У вас пока нет дел</h3>)}
              <div className={card.id} id="idCard"></div>

            </div>
            <form name="addDelo">
              <div id="add">
              <input type="text" id="addText" name="body"></input>
              <button type="submit" id="buttonAdd">
                 <i className="fa-regular fa-square-plus"></i>
              </button>
            </div>  
            </form>
            
          </div>
          
        </div>
      </div>
    </Layout>
  );
};
