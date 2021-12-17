import stockService from "./StockService"
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const StockEditorScreen = () => {
  const {sId} = useParams()
  const [stock, setStock] = useState({})

  useEffect(() => {
    if(sId !== "new") {
      findStockById(sId)
    }
  }, [sId]);

  const createStock = (stock) =>
      stockService.createStock(stock)
      .then(() => window.history.back())

  const findStockById = (sId) =>
      stockService.findStockById(sId)
      .then(stock => setStock(stock))

  const deleteStock = (sId) =>
      stockService.deleteStock(sId)
      .then(() => window.history.back())

  const updateStock = (sId, newStock) =>
      stockService.updateStock(sId, newStock)
      .then(() => window.history.back())


  return (
      <div>
        <h2>Stock Editor</h2>
        <label>ID</label>
        <input value={sId}/><br/>
        <label>Stock</label>
        <input
            onChange={(e) =>
                setStock(stock =>
                    ({...stock, stock: e.target.value}))}
            value={stock.stock}/><br/>
        <label>Ticker</label>
        <input
            onChange={(e) =>
                setStock(stock =>
                    ({...stock, ticker: e.target.value}))}
            value={stock.ticker}/><br/>
        <label>Price</label>
        <input
            onChange={(e) =>
                setStock(stock =>
                    ({...stock, price: e.target.value}))}
            value={stock.price}/><br/>
        <button
            onClick={() => {
              window.history.back()}}>
          Cancel
        </button>
        <button
            onClick={() => deleteStock(sId)}>
          Delete
        </button>
        <button
            onClick={() => createStock(stock)}>
          Create
        </button>
        <button
            onClick={() => updateStock(sId, stock)}>
          Save
        </button>
        <a href = {'/stocks/' + sId +'/positions'}>
          <button>
            Positions For Stock
          </button>
        </a>

      </div>
  )
}

export default StockEditorScreen