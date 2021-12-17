const PORTFOLIOS_URL = "http://localhost:8080/api/portfolios"
const INVESTORS_URL = "http://localhost:8080/api/investors"

export const findAllPortfolios = () =>
    fetch(PORTFOLIOS_URL)
    .then(response => response.json())

export const createPortfolioForInvestor = (portfolio, investorId) =>
    fetch(`${INVESTORS_URL}/${investorId}/portfolios`, {
      method: 'POST',
      body: JSON.stringify(portfolio),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findPortfoliosForInvestor = (investorId) =>
    fetch(`${INVESTORS_URL}/${investorId}/portfolios`)
    .then(response => response.json())

export const findPortfolioById = (id) =>
    fetch(`${PORTFOLIOS_URL}/${id}`)
    .then(response => response.json())


export const deletePortfolio = (id) =>
    fetch(`${PORTFOLIOS_URL}/${id}`, {
      method: "DELETE"
    })


export const createPortfolio = (portfolio) =>
    fetch(PORTFOLIOS_URL, {
      method: 'POST',
      body: JSON.stringify(portfolio),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


export const updatePortfolio = (id, portfolio) =>
    fetch(`${PORTFOLIOS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(portfolio),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const getInvestor = (pId) =>
    fetch(`${PORTFOLIOS_URL}/${pId}/getInvestor`)
    .then(response => response.json())






// TODO: export all functions as the API to this service
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  findAllPortfolios,
  findPortfolioById,
  deletePortfolio,
  createPortfolio,
  updatePortfolio,
  findPortfoliosForInvestor,
  createPortfolioForInvestor,
  getInvestor
}