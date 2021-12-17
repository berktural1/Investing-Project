import {Link} from "react-router-dom";
const {useEffect} = require("react");
const {useState} = require("react");

const InvestorListScreen = () => {
  const [investors, setInvestors] = useState([])
  const findAllInvestors = () =>
      fetch(
          "http://localhost:8080/api/investors")
      .then(res => res.json())
      .then(investors => setInvestors(investors));
  useEffect(findAllInvestors, []);

  return(
      <div>
        <h2>Investors</h2>
        <a href = {'/investors/create/new'}>
          <button>
            Add Investor
          </button>
        </a>

        <a href = "/portfolios">
          <button>
            Portfolios
          </button>
        </a>
        <a href = "/positions">
          <button>
            Positions
          </button>
        </a>
        <a href = "/stocks">
          <button>
            Stocks
          </button>
        </a>
        <ul className="list-group">
          {
            investors.map(investor =>
                <li className="list-group-item"
                    key={investor.id}>
                  <Link to={`/investors/${investor.id}/portfolios`}>
                    {investor.firstName},
                    {investor.lastName},
                    {investor.username}<br/>
                  </Link>

                  <a href = {'/investors/' + investor.id}>
                    <button>
                      edit
                    </button>
                  </a>

                </li>)
          }
        </ul>
      </div>
  )
}

export default InvestorListScreen;