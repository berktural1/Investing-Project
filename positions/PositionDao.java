package com.example.investingserver.positions;
import com.example.investingserver.portfolios.Portfolio;
import com.example.investingserver.portfolios.PortfolioRepository;
import com.example.investingserver.stocks.Stock;
import com.example.investingserver.stocks.StockRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class PositionDao {

  @Autowired
  PositionRepository positionRepository;

  @Autowired
  PortfolioRepository portfolioRepository;

  @Autowired
  StockRepository stockRepository;

  @PostMapping("/api/positions")
  public Position createPosition(@RequestBody Position position) {
    return positionRepository.save(position);
  }

  @PostMapping("/api/portfolios/{portfolioId}/positions")
  public Position createPositionForPortfolio(
      @PathVariable("portfolioId") Integer portfolioId,
      @RequestBody Position position) {
    Portfolio portfolio = portfolioRepository.findById(portfolioId).get();
    position.setPortfolio(portfolio);
    portfolio.getPositions().add(position);
    return positionRepository.save(position);
  }

  @PostMapping("/api/portfolios/{portfolioId}/positions/{stockId}")
  public Position createPositionForStockAndPortfolio(
      @PathVariable("portfolioId") Integer portfolioId,
      @PathVariable("stockId") Integer stockId,
      @RequestBody Position position) {
    Portfolio portfolio = portfolioRepository.findById(portfolioId).get();
    Stock stock = stockRepository.findById(stockId).get();
    position.setPortfolio(portfolio);
    position.setStock(stock);
    List<Position> curr_pos = portfolio.getPositions();
    curr_pos.add(position);
    portfolio.setPositions(curr_pos);
    stock.getPositions().add(position);
    return positionRepository.save(position);
  }

  @GetMapping("/api/portfolios/{portfolioId}/positions")
  public List<Position> findPositionsForPortfolio(
      @PathVariable("portfolioId") Integer portfolioId) {
    Portfolio portfolio = portfolioRepository.findById(portfolioId).get();
    return portfolio.getPositions();
  }

  @GetMapping("/api/stocks/{stockId}/positions")
  public List<Position> findPositionsForStock(
      @PathVariable("stockId") Integer stockId) {
    Stock stock = stockRepository.findById(stockId).get();
    return stock.getPositions();
  }

  @GetMapping("/api/positions")
  public List<Position> findAllPositions() {
    return (List<Position>) positionRepository.findAll();
  }

  @GetMapping("/api/positions/{positionId}")
  public Position findPositionById(
      @PathVariable("positionId") Integer id) {
    return positionRepository.findById(id).get();
  }


  @PutMapping("/api/positions/{positionId}")
  public Position updatePosition(
      @PathVariable("positionId") Integer id,
      @RequestBody Position positionUpdates) {
    Position position = this.findPositionById(id);
    position.setPositionType(positionUpdates.getPositionType());
    position.setAmount(positionUpdates.getAmount());
    position.setValue(positionUpdates.getValue());
    return positionRepository.save(position);
  }

  @DeleteMapping("/api/positions/{positionId}")
  public void deletePosition(
      @PathVariable("positionId") Integer id) {
    positionRepository.deleteById(id);
  }


}
