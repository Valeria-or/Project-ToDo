const React = require("react");
const Layout = require("./Layout");

module.exports = function DayList({ login, card, todo }) {
  return (
    <Layout login={login}>
      <link rel="stylesheet" href="/css/day.css" />
      <script defer src="/js/day.js" />
      <div id="parentDiv">
        <div id="conteiner">
            <h1 id="title">{card.title}</h1>
            <hr/>
          <div id="body">
          <table className="iksweb">
	<tbody>
		<tr>
			<td className="text">1</td>
			<td className="text">2</td>
			<td className="text">3</td>
			<td className="text">4</td>
			<td className="text">5</td>
		</tr>
		<tr>
			<td>
            {
             todo[1] ?
                <input type="checkbox" className="check" id="1" defaultChecked/>
                :
                <input type="checkbox" className="check" id="1"/>
            }
            </td>
			<td>
            {
             todo[2] ?
                <input type="checkbox" className="check" id="2" defaultChecked/>
                :
                <input type="checkbox" className="check" id="2"/>
            }
            </td>
			<td>
            {
             todo[3] ?
                <input type="checkbox" className="check" id="3" defaultChecked/>
                :
                <input type="checkbox" className="check" id="3"/>
            }   
            </td>
			<td>
            {
             todo[4] ?
                <input type="checkbox" className="check" id="4" defaultChecked/>
                :
                <input type="checkbox" className="check" id="4"/>
            }
            </td>
			<td>
            {
             todo[5] ?
                <input type="checkbox" className="check" id="5" defaultChecked/>
                :
                <input type="checkbox" className="check" id="5"/>
            }
            </td>
		</tr>
		<tr>
			<td className="text">6</td>
			<td className="text">7</td>
			<td className="text">8</td>
			<td className="text">9</td>
			<td className="text">10</td>
		</tr>
		<tr>
        <td>
            {
             todo[6] ?
                <input type="checkbox" className="check" id="6" defaultChecked/>
                :
                <input type="checkbox" className="check" id="6"/>
            }
            </td>
			<td>
            {
             todo[7] ?
                <input type="checkbox" className="check" id="7" defaultChecked/>
                :
                <input type="checkbox" className="check" id="7"/>
            }
            </td>
			<td>
            {
             todo[8] ?
                <input type="checkbox" className="check" id="8" defaultChecked/>
                :
                <input type="checkbox" className="check" id="8"/>
            }   
            </td>
			<td>
            {
             todo[9] ?
                <input type="checkbox" className="check" id="9" defaultChecked/>
                :
                <input type="checkbox" className="check" id="9"/>
            }
            </td>
			<td>
            {
             todo[10] ?
                <input type="checkbox" className="check" id="10" defaultChecked/>
                :
                <input type="checkbox" className="check" id="10"/>
            }
            </td>
		</tr>
		<tr>
			<td className="text">11</td>
			<td className="text">12</td>
			<td className="text">13</td>
			<td className="text">14</td>
			<td className="text">15</td>
		</tr>
		<tr>
        <td>
            {
             todo[11] ?
                <input type="checkbox" className="check" id="11" defaultChecked/>
                :
                <input type="checkbox" className="check" id="11"/>
            }
            </td>
			<td>
            {
             todo[12] ?
                <input type="checkbox" className="check" id="12" defaultChecked/>
                :
                <input type="checkbox" className="check" id="12"/>
            }
            </td>
			<td>
            {
             todo[13] ?
                <input type="checkbox" className="check" id="13" defaultChecked/>
                :
                <input type="checkbox" className="check" id="13"/>
            }   
            </td>
			<td>
            {
             todo[14] ?
                <input type="checkbox" className="check" id="14" defaultChecked/>
                :
                <input type="checkbox" className="check" id="14"/>
            }
            </td>
			<td>
            {
             todo[15] ?
                <input type="checkbox" className="check" id="15" defaultChecked/>
                :
                <input type="checkbox" className="check" id="15"/>
            }
            </td>
		</tr>
		<tr>
			<td className="text">16</td>
			<td className="text">17</td>
			<td className="text">18</td>
			<td className="text">19</td>
			<td className="text">20</td>
		</tr>
		<tr>
        <td>
            {
             todo[16] ?
                <input type="checkbox" className="check" id="16" defaultChecked/>
                :
                <input type="checkbox" className="check" id="16"/>
            }
            </td>
			<td>
            {
             todo[17] ?
                <input type="checkbox" className="check" id="17" defaultChecked/>
                :
                <input type="checkbox" className="check" id="17"/>
            }
            </td>
			<td>
            {
             todo[18] ?
                <input type="checkbox" className="check" id="18" defaultChecked/>
                :
                <input type="checkbox" className="check" id="18"/>
            }   
            </td>
			<td>
            {
             todo[19] ?
                <input type="checkbox" className="check" id="19" defaultChecked/>
                :
                <input type="checkbox" className="check" id="19"/>
            }
            </td>
			<td>
            {
             todo[20] ?
                <input type="checkbox" className="check" id="20" defaultChecked/>
                :
                <input type="checkbox" className="check" id="20"/>
            }
            </td>
		</tr>
		<tr>
			<td className="text">21</td>
			<td className="text">22</td>
			<td className="text">23</td>
			<td className="text">24</td>
			<td className="text">25</td>
		</tr>
		<tr>
        <td>
            {
             todo[21] ?
                <input type="checkbox" className="check" id="21" defaultChecked/>
                :
                <input type="checkbox" className="check" id="21"/>
            }
            </td>
			<td>
            {
             todo[22] ?
                <input type="checkbox" className="check" id="22" defaultChecked/>
                :
                <input type="checkbox" className="check" id="22"/>
            }
            </td>
			<td>
            {
             todo[23] ?
                <input type="checkbox" className="check" id="23" defaultChecked/>
                :
                <input type="checkbox" className="check" id="23"/>
            }   
            </td>
			<td>
            {
             todo[24] ?
                <input type="checkbox" className="check" id="24" defaultChecked/>
                :
                <input type="checkbox" className="check" id="24"/>
            }
            </td>
			<td>
            {
             todo[25] ?
                <input type="checkbox" className="check" id="25" defaultChecked/>
                :
                <input type="checkbox" className="check" id="25"/>
            }
            </td>
		</tr>
		<tr>
			<td className="text">26</td>
			<td className="text">27</td>
			<td className="text">28</td>
			<td className="text">29</td>
			<td className="text">30</td>
		</tr>
		<tr>
        <td>
            {
             todo[26] ?
                <input type="checkbox" className="check" id="26" defaultChecked/>
                :
                <input type="checkbox" className="check" id="26"/>
            }
            </td>
			<td>
            {
             todo[27] ?
                <input type="checkbox" className="check" id="27" defaultChecked/>
                :
                <input type="checkbox" className="check" id="27"/>
            }
            </td>
			<td>
            {
             todo[28] ?
                <input type="checkbox" className="check" id="28" defaultChecked/>
                :
                <input type="checkbox" className="check" id="28"/>
            }   
            </td>
			<td>
            {
             todo[29] ?
                <input type="checkbox" className="check" id="29" defaultChecked/>
                :
                <input type="checkbox" className="check" id="29"/>
            }
            </td>
			<td>
            {
             todo[30] ?
                <input type="checkbox" className="check" id="30" defaultChecked/>
                :
                <input type="checkbox" className="check" id="30"/>
            }
            </td>
		</tr>
	</tbody>
</table>
          </div>
          <div className={todo.tracker_id}>
            <div className="idTracker"></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}