package com.example.investingserver.portfolios;
import com.example.investingserver.investors.Investor;
import com.example.investingserver.investors.InvestorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PortfolioDao {
  @Autowired
  PortfolioRepository portfolioRepository;

  @Autowired
  InvestorRepository investorRepository;

  @PostMapping("/api/portfolios")
  public Portfolio createPortfolio(@RequestBody Portfolio portfolio) {
    return portfolioRepository.save(portfolio);
  }

  @PostMapping("/api/investors/{investorId}/portfolios")
  public Portfolio createPortfolioForInvestor(
      @PathVariable("investorId") Integer investorId,
      @RequestBody Portfolio portfolio) {
    Investor investor = investorRepository.findById(investorId).get();
    portfolio.setInvestor(investor);
    investor.getPortfolios().add(portfolio);
    return portfolioRepository.save(portfolio);
  }

  @PostMapping("/api/portfolios/{pId}/getInvestor")
  public Integer setInvestor(
      @PathVariable("pId") Integer pId) {
    return findPortfolioById(pId).getInvestor().getId();
  }

  @GetMapping("/api/portfolios/{pId}/getInvestor")
  public Integer getInvestor(
      @PathVariable("pId") Integer pId) {
    return findPortfolioById(pId).getInvestor().getId();
  }

  @GetMapping("/api/investors/{investorId}/portfolios")
  public List<Portfolio> findPortfoliosForInvestor(
      @PathVariable("investorId") Integer investorId) {
    Investor investor = investorRepository.findById(investorId).get();
    return investor.getPortfolios();
  }

  @GetMapping("/api/portfolios")
  public List<Portfolio> findAllPortfolios() {
    return (List<Portfolio>) portfolioRepository.findAll();
  }

  @GetMapping("/api/portfolios/{portfolioId}")
  public Portfolio findPortfolioById(
      @PathVariable("portfolioId") Integer id) {
    return portfolioRepository.findById(id).get();
  }

  @PutMapping("/api/portfolios/{portfolioId}")
  public Portfolio updatePortfolio(
      @PathVariable("portfolioId") Integer id,
      @RequestBody Portfolio portfolioUpdates) {
    Portfolio portfolio = this.findPortfolioById(id);
    portfolio.setName(portfolioUpdates.getName());
    portfolio.setCreated(portfolioUpdates.getCreated());
    portfolio.setBalance(portfolioUpdates.getBalance());
    return portfolioRepository.save(portfolio);
  }

  @DeleteMapping("/api/portfolios/{portfolioId}")
  public void deletePortfolio(
      @PathVariable("portfolioId") Integer id) {
    portfolioRepository.deleteById(id);
  }


  //TODO: might be missing methods
}
