const React = require("react");
const Layout = require("./Layout");

module.exports = function Calendar({ login }) {
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="/css/calendar.css" />
      <script defer src="/js/calendar.js" />
      <div className="parentDiv">
        <div className="calendar">
          <div className="pok">
            <div id="month-calendar">
              <ul class="month">
                <li class="prev">
                  <i class="fas fa-angle-double-left"></i>
                </li>
                <li class="next">
                  <i class="fas fa-angle-double-right"></i>
                </li>
                <li class="month-name"></li>
                <li class="year-name"></li>
              </ul>
              <ul class="weekdays">
                <li>Пн</li>
                <li>Вт</li>
                <li>Ср</li>
                <li>Чт</li>
                <li>Пт</li>
                <li>Сб</li>
                <li>Вс</li>
              </ul>
              <ul class="days"></ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
