import {useParams} from "react-router-dom";

const {useEffect} = require("react");
const {useState} = require("react");
const PositionListScreen = () => {
  const params = useParams();
  const [positions, setPositions] = useState([])

  const findAllPositions = () =>
      fetch(
          "http://localhost:8080/api/positions")
      .then(res => res.json())
      .then(positions => setPositions(positions));


  const findPositionsForPortfolio = () =>
      fetch(`http://localhost:8080/api/portfolios/${params.pId}/positions`)
      .then (res => res.json())
      .then(positions => setPositions(positions));

  const findPositionsForStock = () =>
      fetch(`http://localhost:8080/api/stocks/${params.sId}/positions`)
      .then (res => res.json())
      .then(positions => setPositions(positions));

  function findPositions() {
    if (params.pId) {
      findPositionsForPortfolio();
    }
    else if (params.sId) {
      findPositionsForStock();
    }
    else{
      findAllPositions();
    }
  }
  useEffect(findPositions, );

  return(
      <div>
        <h2>Positions</h2>
        <a href = {'/positions/create/new'}>
          <button>
            Add Position
          </button>
        </a>
        <a href = "/portfolios">
          <button>
            Portfolios
          </button>
        </a>
        <a href = "/">
          <button>
            Investors
          </button>
        </a>
        <a href = "/stocks">
          <button>
            Stocks
          </button>
        </a>
        <ul className="list-group">
          {
            positions.map(position =>
                <li className="list-group-item"
                    key={position.id}>
                  {position.positionType},
                  {position.amount},
                  {position.value}<br/>

                  <a href = {'/positions/' + position.id}>
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

export default PositionListScreen;