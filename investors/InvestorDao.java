package com.example.investingserver.investors;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class InvestorDao {

  @Autowired
  InvestorRepository investorRepository;

  @PostMapping("/api/investors")
  public Investor createInvestor(@RequestBody Investor investor) {
    return investorRepository.save(investor);
  }

  @GetMapping("/api/investors")
  public List<Investor> findAllInvestors() {
    return (List<Investor>) investorRepository.findAll();
  }

  @GetMapping("/api/investors/{investorId}")
  public Investor findInvestorById(
      @PathVariable("investorId") Integer id) {
    return investorRepository.findById(id).get();
  }


  @PutMapping("/api/investors/{investorId}")
  public Investor updateInvestor(
      @PathVariable("investorId") Integer id,
      @RequestBody Investor investorUpdates) {
    Investor investor = investorRepository.findInvestorById(id);
    investor.setFirstName(investorUpdates.getFirstName());
    investor.setLastName(investorUpdates.getLastName());
    investor.setUsername(investorUpdates.getUsername());
    investor.setPassword(investorUpdates.getPassword());
    investor.setEmail(investorUpdates.getPassword());
    investor.setDateOfBirth(investorUpdates.getDateOfBirth());
    return investorRepository.save(investor);
  }


  @DeleteMapping("/api/investors/{investorId}")
  public void deleteInvestor(
      @PathVariable("investorId") Integer id) {
    investorRepository.deleteById(id);
  }


}
