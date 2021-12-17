import './App.css';
import InvestorListScreen from "./InvestorListScreen";
import PortfolioListScreen from "./PortfolioListScreen";
import PositionListScreen from "./PositionListScreen";
import StockListScreen from "./StockListScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import InvestorEditorScreen from "./InvestorEditorScreen";
import CreateInvestorScreen from "./CreateInvestorScreen";
import PortfolioEditorScreen from "./PortfolioEditorScreen";
import CreatePortfolioScreen from "./CreatePortfolioScreen";
import PositionEditorScreen from "./PositionEditorScreen";
import CreatePositionScreen from "./CreatePositionScreen";
import StockEditorScreen from "./StockEditorScreen";
import CreateStockScreen from "./CreateStockScreen";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/'
                   element={<InvestorListScreen/>}/>

            <Route path='/investors/:iId/portfolios'
                   element={<PortfolioListScreen/>}/>
            <Route path='/portfolios'
                   element={<PortfolioListScreen/>}/>

            <Route path='/positions'
                   element={<PositionListScreen/>}/>
            <Route path='/portfolios/:pId/positions'
                   element={<PositionListScreen/>}/>
            <Route path='/stocks/:sId/positions'
                   element={<PositionListScreen/>}/>
            <Route path='/stocks'
                   element={<StockListScreen/>}/>

            <Route path='/investors/create/:newId'
                   element={<CreateInvestorScreen/>}/>
            <Route path='/investors/:iId'
                   element={<InvestorEditorScreen/>}/>

            <Route path='/portfolios/create/:newId'
                   element={<CreatePortfolioScreen/>}/>
            <Route path='/portfolios/:pId'
                   element={<PortfolioEditorScreen/>}/>

            <Route path='/positions/create/:newId'
                   element={<CreatePositionScreen/>}/>
            <Route path='/positions/:pId'
                   element={<PositionEditorScreen/>}/>

            <Route path='/stocks/create/:newId'
                   element={<CreateStockScreen/>}/>
            <Route path='/stocks/:sId'
                   element={<StockEditorScreen/>}/>


          </Routes>



        </BrowserRouter>
      </div>

  );
}

export default App;
