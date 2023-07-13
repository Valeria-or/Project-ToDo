const React = require("react");
const Layout = require("./Layout");

module.exports = function OneLists({ login, card, todo }) {
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="/css/oneList.css" />
      <script defer src="/js/oneList.js" />
      <div id="parentDiv">
        <div id="conteiner">
          <h1 id="title">{card.title}</h1>
          <hr />
          <div id="body">
            <div id="ulParent">

            
              {todo.length ? (
                <ul id="ul">
                  {todo.map((el) => (
                  <li className="todo" id={el.id} key={el.id}>
                    {el.title}
                    <span className="delete-icon">
                      <i className="far fa-trash-alt"></i>
                    </span>
                  </li>
                  ))}
                </ul>
              ) : (
                <h3>У вас пока нет cписка</h3>
              )}
            </div>
              <div className={card.id} id="idCard"></div>

            <form name="addDelo">
              <div id="add">
                <input type="text" id="addText" name="title"></input>
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
