package com.example.investingserver.investors;


import com.example.investingserver.portfolios.Portfolio;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Timestamp;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="investors")
public class Investor {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String firstName;
  private String lastName;
  private String username;
  private String password;
  private String email;
  private Timestamp dateOfBirth;

  @OneToMany(mappedBy = "investor")
  @JsonIgnore
  private List<Portfolio> portfolios;

  public List<Portfolio> getPortfolios() {
    return portfolios;
  }

  public void setPortfolios(List<Portfolio> portfolios) {
    this.portfolios = portfolios;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) { this.email = email; }

  public Timestamp getDateOfBirth() { return dateOfBirth;}

  public void setDateOfBirth(Timestamp dateOfBirth) { this.dateOfBirth = dateOfBirth;}



  public Investor(String username, String password, String firstName,
      String lastName, String email, Timestamp dateOfBirth) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
  }

  public Investor() {}
}

