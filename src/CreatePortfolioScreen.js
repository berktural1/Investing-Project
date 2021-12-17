import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import portfolioService from "./PortfolioService";




const CreatePortfolioScreen = () => {
  const {newId} = useParams()
  const [portfolio, setPortfolio] = useState([])
  let investorId = 0;
  let curDate = Date.now();

  useEffect(() => {
    if(newId !== "new") {
      findPortfolioById(newId)
    }
  }, [newId]);

  const createPortfolioForInvestor = (portfolio, investorId) =>
      portfolioService.createPortfolioForInvestor(portfolio, investorId)
      .then(() => window.history.back())

  const findPortfolioById = (newId) =>
      portfolioService.findPortfolioById(newId)
      .then(portfolio => setPortfolio(portfolio))


  return (
      <div>
        <h2>Create Portfolio</h2>
        <label>ID</label>
        <input value={newId}/><br/>
        <label>Name</label>
        <input
            onChange={(e) =>
                setPortfolio(portfolio =>
                    ({...portfolio, name: e.target.value}))}
            value={portfolio.name}/><br/>
        <label>Date Created</label>
        <input
            onChange={(e) =>
                setPortfolio(portfolio =>
                    ({...portfolio, created: e.target.value}))}
            value={portfolio.created}/><br/>
        <label>balance</label>
        <input
            onChange={(e) =>
                setPortfolio(portfolio =>
                    ({...portfolio, balance: e.target.value}))}
            value={portfolio.balance}/><br/>
        <label>Investor Id</label>
        <input
            onChange={(e) =>
                investorId = e.target.value}/><br/>
        <button
            onClick={() => window.history.back()}>
          Cancel
        </button>
        <button
            onClick={() => createPortfolioForInvestor(portfolio, investorId)}>
          Create
        </button>

        <a href = {'/portfolios/' + newId +'/positions'}>
          <button>
            Positions
          </button>
        </a>


      </div>
  )
}

export default CreatePortfolioScreen