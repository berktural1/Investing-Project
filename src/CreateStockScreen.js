import stockService from "./StockService"
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const StockEditorScreen = () => {
  const {newId} = useParams()
  const [stock, setStock] = useState({})

  useEffect(() => {
    if(newId !== "new") {
      findStockById(newId)
    }
  }, [newId]);

  const createStock = (stock) =>
      stockService.createStock(stock)
      .then(() => window.history.back())

  const findStockById = (newId) =>
      stockService.findStockById(newId)
      .then(stock => setStock(stock))


  return (
      <div>
        <h2>Stock Editor</h2>
        <label>ID</label>
        <input value={newId}/><br/>
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
            onClick={() => createStock(stock)}>
          Create
        </button>
      </div>
  )
}

export default StockEditorScreen