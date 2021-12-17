import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import positionService from "./PositionService";



const CreatePositionScreen = () => {
  const {newId} = useParams()
  const [position, setPosition] = useState([])
  let portfolioId = 0;
  let stockId = 0;

  useEffect(() => {
    if(newId !== "new") {
      findPositionById(newId)
    }
  }, [newId]);

  const createPosition = (position) =>
      positionService.createPosition(position)
      .then(() => window.history.back())

  const createPositionForPortfolio = (position, portfolioId) =>
      positionService.createPositionForPortfolio(position, portfolioId)
      .then(() => window.history.back())

  const createPositionForPortfolioAndStock = (position, stockId, portfolioId) =>
      positionService.createPosition(position, stockId, portfolioId)
      .then(() => window.history.back())

  const findPositionById = (newId) =>
      positionService.findPositionById(newId)
      .then(position => setPosition(position))



  return (
      <div>
        <h2>Create Position</h2>
        <label>ID</label>
        <input value={newId}/><br/>
        <label>Position Type</label>
        <select
            className="form-control margin-bottom-10px"
            value={position.positionType}
            onChange={(e)=>
                setPosition(position =>
                    ({...position, positionType: e.target.value}))}>
          <option>LONG</option>
          <option>SHORT</option>
          <option>CALL</option>
          <option>PUT</option>
        </select><br/>
        <label>Amount</label>
        <input
            onChange={(e) =>
                setPosition(position =>
                    ({...position, amount: e.target.value}))}
            value={position.amount}/><br/>
        <label>Value</label>
        <input
            onChange={(e) =>
                setPosition(position =>
                    ({...position, value: e.target.value}))}
            value={position.value}/><br/>
        {/*        <label>Portfolio Id</label>
        <input
            onChange={(e) =>
                portfolioId = e.target.value}/><br/>
        <label>Stock Id</label>
        <input
            onChange={(e) =>
                stockId = e.target.value}/><br/>*/}
        <button
            onClick={() => {
              window.history.back()}}>
          Cancel
        </button>
        <button
            onClick={() => createPosition(position)}>
          Create
        </button>
        <a href = {'/portfolios/' + position.positionType}>
          <button>
            Test
          </button>
        </a>

      </div>
  )
}

export default CreatePositionScreen