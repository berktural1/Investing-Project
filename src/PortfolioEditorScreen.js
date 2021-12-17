import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import portfolioService from "./PortfolioService";

const PortfolioEditorScreen = () => {
  const {pId} = useParams()
  const [portfolio, setPortfolio] = useState({})

  useEffect(() => {
    if(pId !== "new") {
      findPortfolioById(pId)
    }
  }, [pId]);

  const createPortfolio = (portfolio) =>
      portfolioService.createPortfolio(portfolio)
      .then(() => window.history.back())

  //const investor = portfolioService.getInvestor(pId);

  const findPortfolioById = (pId) =>
      portfolioService.findPortfolioById(pId)
      .then(portfolio => setPortfolio(portfolio))

  const deletePortfolio = (pId) =>
      portfolioService.deletePortfolio(pId)
      .then(() => window.history.back())

  const updatePortfolio = (pId, newPortfolio) =>
      portfolioService.updatePortfolio(pId, newPortfolio)
      .then(() => window.history.back())


  return (
      <div>
        <h2>Portfolio Editor</h2>
        <label>ID</label>
        <input value={pId}/><br/>
        <label>Name</label>
        <input
            onChange={(e) =>
                setPortfolio(portfolio =>
                    ({...portfolio, name: e.target.value}))}
            value={portfolio.name}/><br/>
        <label>Created</label>
        <input
            onChange={(e) =>
                setPortfolio(portfolio =>
                    ({...portfolio, created: e.target.value}))}
            value={portfolio.created}/><br/>
        <label>Balance</label>
        <input
            onChange={(e) =>
                setPortfolio(portfolio =>
                    ({...portfolio, balance: e.target.value}))}
            value={portfolio.balance}/><br/>
        <button
            onClick={() => {
              window.history.back()}}>
          Cancel
        </button>
        <button
            onClick={() => deletePortfolio(pId)}>
          Delete
        </button>
        <button
            onClick={() => createPortfolio(portfolio)}>
          Create
        </button>
        <button
            onClick={() => updatePortfolio(pId, portfolio)}>
          Save
        </button>
        <a href = {'/investors/' + pId}>
          <button>
            Investor for Portfolio
          </button>
        </a>
        <a href = {'/portfolios/' + pId + '/positions'}>
          <button>
            Positions for Portfolio
          </button>
        </a>


      </div>
  )
}

export default PortfolioEditorScreen