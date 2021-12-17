package com.example.investingserver.stocks;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class StockDao {


  @Autowired
  StockRepository stockRepository;

  @PostMapping("/api/stocks")
  public Stock createInvestor(@RequestBody Stock stock) {
    return stockRepository.save(stock);
  }

  @GetMapping("/api/stocks")
  public List<Stock> findAllStocks() {
    return (List<Stock>) stockRepository.findAll();
  }

  @GetMapping("/api/stocks/{stockId}")
  public Stock findStockById(
      @PathVariable("stockId") Integer id) {
    return stockRepository.findById(id).get();
  }


  @PutMapping("/api/stocks/{stockId}")
  public Stock updateStock(
      @PathVariable("stockId") Integer id,
      @RequestBody Stock stockUpdates) {
    Stock stock = this.findStockById(id);
    stock.setStock(stockUpdates.getStock());
    stock.setTicker(stockUpdates.getTicker());
    stock.setPrice(stockUpdates.getPrice());
    return stockRepository.save(stock);
  }



  @DeleteMapping("/api/stocks/{stockId}")
  public void deleteStock(
      @PathVariable("stockId") Integer id) {
    stockRepository.deleteById(id);
  }

}
