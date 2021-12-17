import {Link} from "react-router-dom";
//import{useParams} from "react-router-dom";

const {useEffect} = require("react");
const {useState} = require("react");
const StockListScreen = () => {
  //const params = useParams();
  const [stocks, setStocks] = useState([])
  const findAllStocks = () =>
      fetch(
          "http://localhost:8080/api/stocks")
      .then(res => res.json())
      .then(stocks => setStocks(stocks));
  useEffect(findAllStocks, []);


  return(
      <div>
        <h2>Stocks</h2>
        <a href = {'/stocks/create/new'}>
          <button>
            Add Stock
          </button>
        </a>
        <a href = "/">
          <button>
            Investors
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
        <ul className="list-group">
          {
            stocks.map(stock =>
                <li className="list-group-item"
                    key={stock.id}>
                  <Link to={`/stocks/${stock.id}/positions`}>
                    {stock.stock},
                    {stock.ticker},
                    {stock.price}<br/>
                  </Link>

                  <a href = {'/stocks/' + stock.id}>
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

export default StockListScreen;