package com.example.investingserver.positions;

import com.example.investingserver.portfolios.Portfolio;
import com.example.investingserver.stocks.Stock;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;


@Entity
@Table(name = "positions")
public class Position {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String positionType;
  private Integer amount;
  private Float value;


  @ManyToOne(cascade = CascadeType.REMOVE)
  private Portfolio portfolio;

  @ManyToOne(cascade = CascadeType.REMOVE)
  private Stock stock;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getPositionType() {
    return positionType;
  }

  public void setPositionType(String positionType) {
    this.positionType = positionType;
  }

  public Integer getAmount() {
    return amount;
  }

  public void setAmount(Integer amount) {
    this.amount = amount;
  }

  public Float getValue() {
    return value;
  }

  public void setValue(Float value) {
    this.value = value;
  }

  public Portfolio getPortfolio() {
    return portfolio;
  }

  public void setPortfolio(Portfolio portfolio) {
    this.portfolio = portfolio;
  }

  public Stock getStock() {
    return stock;
  }

  public void setStock(Stock stock) {
    this.stock = stock;
  }


  public Position() {}
}
