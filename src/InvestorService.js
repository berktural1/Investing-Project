const INVESTORS_URL = "http://localhost:8080/api/investors"

export const findAllInvestors = () =>
    fetch(INVESTORS_URL)
    .then(response => response.json())



export const findInvestorById = (id) =>
    fetch(`${INVESTORS_URL}/${id}`)
    .then(response => response.json())


export const deleteInvestor = (id) =>
    fetch(`${INVESTORS_URL}/${id}`, {
      method: "DELETE"
    })


export const createInvestor = (investor) =>
    fetch(INVESTORS_URL, {
      method: 'POST',
      body: JSON.stringify(investor),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


export const updateInvestor = (id, investor) =>
    fetch(`${INVESTORS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(investor),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())





// TODO: export all functions as the API to this service
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  findAllInvestors,
  findInvestorById,
  deleteInvestor,
  createInvestor,
  updateInvestor
}