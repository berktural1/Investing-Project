const STOCKS_URL = "http://localhost:8080/api/stocks"
//const POSITIONS_URL = "http://localhost:8080/api/positions"


export const findAllStocks = () =>
    fetch(STOCKS_URL)
    .then(response => response.json())

export const createPositionForStock = (stockId, stock) =>
    fetch(`${STOCKS_URL}/${stockId}/positions`, {
      method: 'POST',
      body: JSON.stringify(stock),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findPositionsForStock = (stockId) =>
    fetch(`${STOCKS_URL}/${stockId}/positions`)
    .then(response => response.json())

export const findStockById = (id) =>
    fetch(`${STOCKS_URL}/${id}`)
    .then(response => response.json())


export const deleteStock = (id) =>
    fetch(`${STOCKS_URL}/${id}`, {
      method: "DELETE"
    })


export const createStock = (stock) =>
    fetch(STOCKS_URL, {
      method: 'POST',
      body: JSON.stringify(stock),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


export const updateStock = (id, stock) =>
    fetch(`${STOCKS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(stock),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())






// TODO: export all functions as the API to this service
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  findAllStocks,
  findStockById,
  deleteStock,
  createStock,
  updateStock
}