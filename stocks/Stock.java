package com.example.investingserver.stocks;

import com.example.investingserver.positions.Position;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.*;


@Entity
@Table(name = "stocks")
public class Stock {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String stock;
  private String ticker;
  private Float price;


  @OneToMany(mappedBy = "stock")
  @JsonIgnore
  private List<Position> positions;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getStock() {
    return stock;
  }

  public void setStock(String stock) {
    this.stock = stock;
  }

  public String getTicker() {
    return ticker;
  }

  public void setTicker(String ticker) {
    this.ticker = ticker;
  }

  public Float getPrice() {
    return price;
  }

  public void setPrice(Float price) {
    this.price = price;
  }

  public List<Position> getPositions() {
    return positions;
  }

  public void setPositions(List<Position> positions) {
    this.positions = positions;
  }
}
