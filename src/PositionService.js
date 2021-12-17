const POSITIONS_URL = "http://localhost:8080/api/positions"
const PORTFOLIOS_URL = "http://localhost:8080/api/portfolios"
const STOCKS_URL = "http://localhost:8080/api/stocks"


export const findAllPositions = () =>
    fetch(POSITIONS_URL)
    .then(response => response.json())

export const findPositionsForPortfolio = (portfolioId) =>
    fetch(`${PORTFOLIOS_URL}/${portfolioId}/positions`)
    .then(response => response.json())

export const createPosition = (position) =>
    fetch(POSITIONS_URL, {
      method: 'POST',
      body: JSON.stringify(position),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const createPositionForPortfolio = (position, portfolioId) =>
    fetch(`${PORTFOLIOS_URL}/${portfolioId}/positions`, {
      method: 'POST',
      body: JSON.stringify(position),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const createPositionForStock = (stockId, position) =>
    fetch(`${STOCKS_URL}/${stockId}/positions`, {
      method: 'POST',
      body: JSON.stringify(position),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const createPositionForStockAndPortfolio = (position, stockId, portfolioId) =>
    fetch(`${PORTFOLIOS_URL}/${portfolioId}/${stockId}`, {
      method: 'POST',
      body: JSON.stringify(position),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findPositionsForStock = (stockId) =>
    fetch(`${STOCKS_URL}/${stockId}/positions`)
    .then(response => response.json())

export const findPositionById = (id) =>
    fetch(`${POSITIONS_URL}/${id}`)
    .then(response => response.json())


export const deletePosition = (id) =>
    fetch(`${POSITIONS_URL}/${id}`, {
      method: "DELETE"
    })



export const updatePosition = (id, position) =>
    fetch(`${POSITIONS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(position),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())






// TODO: export all functions as the API to this service
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  findAllPositions,
  findPositionById,
  deletePosition,
  createPosition,
  updatePosition,
  createPositionForPortfolio,
  findPositionsForPortfolio,
  createPositionForStockAndPortfolio
}