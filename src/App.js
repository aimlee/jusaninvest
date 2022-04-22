import TopNavBar from "./components/navbar/topNavBar";
import TabBar from "./components/tabbar/TabBar";
import DemoLine from "./components/lineChart/LineChart";
import RiskLvl from "./components/RiskLvl/RiskLvl";
import IncomeBlock from "./components/IncomeBlock/Income";
import Calculator from "./components/Calculator/Calculator";
import Buypie from "./components/buy-pie/BuyPie";

function App() {
  return (
    <div className="App">
        <TopNavBar/>
        <TabBar/>
        <DemoLine/>
        <RiskLvl/>
        <IncomeBlock/>
        <Calculator/>
        <Buypie/>
    </div>
  );
}

export default App;
