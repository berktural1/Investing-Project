package com.example.investingserver.investors;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;

public interface InvestorRepository extends CrudRepository<Investor, Integer> {

  @Query(value = "SELECT * FROM investor",
      nativeQuery = true)
  public List<Investor> findAllInvestors();
  @Query(value = "SELECT * FROM investor WHERE id=:investorId",
      nativeQuery = true)
  public Investor findInvestorById(@Param("investorId") Integer id);
}
