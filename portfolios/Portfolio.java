package com.example.investingserver.portfolios;

import com.example.investingserver.investors.Investor;
import com.example.investingserver.positions.Position;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name="portfolios")
public class Portfolio {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String name;
  private Timestamp created;
  private Float balance;


  @ManyToOne
  private Investor investor;


  @OneToMany(mappedBy = "portfolio")
  @JsonIgnore
  private List<Position> positions;

  public List<Position> getPositions() {
    return positions;
  }

  public void setPositions(List<Position> positions) {
    this.positions = positions;
  }


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Timestamp getCreated() {
    return created;
  }

  public void setCreated(Timestamp created) {
    this.created = created;
  }


  //TODO: look at this***
  public Float getBalance() {
    return this.balance;
  }

  //TODO: look at this***
  public void setBalance(Float balance) {
    this.balance = balance;
  }

  public Investor getInvestor() {
    return investor;
  }

  public void setInvestor(Investor investor) {
    this.investor = investor;
  }
}
