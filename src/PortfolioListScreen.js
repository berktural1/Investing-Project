import {Link, useParams} from "react-router-dom";

const {useEffect} = require("react");
const {useState} = require("react");
const PortfolioListScreen = () => {
  const params = useParams();
  const [portfolios, setPortfolios] = useState([])
  const findAllPortfolios = () =>
      fetch(
          "http://localhost:8080/api/portfolios")
      .then(res => res.json())
      .then(portfolios => setPortfolios(portfolios));


  const findPortfoliosForInvestor = () =>
      fetch(`http://localhost:8080/api/investors/${params.iId}/portfolios`)
      .then(res => res.json())
      .then(portfolios => setPortfolios(portfolios));


  function findPortfolios(){
    if (params.iId) {
      findPortfoliosForInvestor();
    }
    else{
      findAllPortfolios();
    }
  }
  useEffect(findPortfolios)


  return(
      <div>
        <h2>Portfolios</h2>
        <a href = {'/portfolios/create/new'}>
          <button>
            Add Portfolio
          </button>
        </a>
        <a href = "/">
          <button>
            Investors
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
            portfolios.map(portfolio =>
                <li className="list-group-item"
                    key={portfolio.id}>
                  <Link to={`/portfolios/${portfolio.id}/positions`}>
                    {portfolio.name},
                    {portfolio.created},
                    {portfolio.balance}<br/>
                  </Link>

                  <a href = {'/portfolios/' + portfolio.id}>
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

export default PortfolioListScreen;