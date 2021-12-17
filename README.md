Project Name: Investment Manager

Team Name: Final Project 18

Team Members: Berk Tural

Project Description: 

This project is a way to keep track of investors (account with related credentials) and their portfolios with their different assets. 
This UI, after further work implementing live stock prices, can serve as a better alternative to other trading platforms UI's.
Specifically, an investor can have any number of portfolios with positions in any number of stocks. 
The value of each position will be determined based on the number associated with each position (long, short, put, call) and the stock the position is correlated to.
The overall value of the portfolios will be shown and calculated by summing up the values of all positions in each portfolio.


Data Model Link: 

https://lucid.app/lucidchart/2587e27f-d9cd-4155-bc36-6e9efa9625bf/edit?viewport_loc=-8%2C-213%2C1687%2C964%2C0_0&invitationId=inv_cde8ccc1-2463-4db9-ae6a-a9a7992ebae5


Description of User Data Model:

The User in this data model is an ‘investor.’ A typical user of this platform would be someone looking to track their stock portfolios on a platform outside of mainstream ones.
This could be to have a better, easier to understand user interface and more customization to viewing preferences and information shown in the future.
An investor is a person with any number of portfolios with a balance determined by adding the cash balance in the portfolio to the sum of the values of all the positions in a portfolio.
An investor has a first name, last name, username, password, email, and date of birth.


Description of Domain Object Models:

The three domain objects in this model are ‘portfolios’ and ‘stocks’. 
Portfolios represent a collection of cash and positions in different stocks. 
A portfolio has a name, date created, and a balance (value determined as previously described). 
Stocks represent real world stocks and make up positions in portfolios. 
A stock has a stock (name), ticker (string identifying the stock), and a price.
Connecting portfolios and stocks are 'positions.' Positions list the amount of a certain position, the type of position, the stock, and the current value.



Description of User to Domain Object Relationship:

The user to domain relationship in this project is between investors and portfolios. 
It is a one-to-many relationship where one investor is related to, potentially, many portfolios. 
This makes sense, as investors in the real world can have many portfolios including personal trading account, Roth-IRA, retirement, etc. 
The foreign key in the portfolios table that references the id of an investor represents this one-to-many relationship.


Description of the Domain Object to Domain Object Relationship:

The domain object to domain object relationship in this project is between portfolios and stocks. 
This relationship is a many-to-many relationship and reified through the positions table. 
This is done through a one-to many relationship from portfolios and positions as well as from stocks and positions. 
This makes sense as portfolios can have positions in many different stocks and stocks can be part of positions in many different portfolios in the real world.


Description of the Portable Enumeration:

The portable enumeration in this project is the type of position. 
A position can be one of ‘LONG’, ‘SHORT’, ‘CALL’, or ‘PUT’ and represents types of positions available in the real world. 
The position_type table contains these options and they are referenced as one of the fields in the positions table, representing the portable enumeration.


Description of User Interface Requirements: 

The user interface allow for the viewing of each user (investor) and certain information related to that user. 
An investor can be clicked on to see its portfolios.
An investor and certain information related to it can also be edited on another screen, where you can navigate to the portfolios for that investor as well.
There is also a way to create investors on another screen.

The user interface also allows for the viewing of all portfolios or just the portfolios related to a certain investor (as described above).
Portfolios contain a link to navigate to the related positions for that portfolio
Portfolios can also be edited on a separate screen which also has links to the related positions and investor.
Portfolios can be created on the user interface on a screen as well.

Positions can also be viewed in a list fashion for all of the positions, all of the positions for a certain portfolio, or all of the positions related to a certain stock.
Positions can be edited on a separate screen, as well as created on yet another screen.
Buttons on the editor screen navigate to the portfolio and stock related to the position.

A list of all the stocks in this database can be seen on a screen, with links to the positions related to each stock.
Stocks can be created on a screen, as well as edited on another. The editing screen also has a button to navigate to its related positions.

