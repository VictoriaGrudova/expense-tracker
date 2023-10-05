import './App.css';
import Addtransaction from './components/Addtransaction';
import Balance from './components/Balance';
import IncomeExpences from './components/IncomeExpences';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Balance/>
        <IncomeExpences/>
        <TransactionList/>
        <Addtransaction/>
      </div>
    </div>
  );
}

export default App;
