import { Component} from 'react';
import MainPage from './Components/MainPage/Mainpage';
import TransactionListPage from './Components/TransactionListPage/TransactionListPage';
// import Transaction from './Components/TransactionForm/TransactionForm';
class App extends Component {
  state = {
    activePage : 'main',//main || incomes || costs
  }

changePage = (activePage) => this.setState({activePage: activePage})

  render(){
    return (
      <div>
        {this.state.activePage === 'main' &&  <MainPage changePage={this.changePage}/>}
        {this.state.activePage === 'incomes' &&  <TransactionListPage changePage={this.changePage} transtype={'incomes'} />}
        {this.state.activePage === 'costs' &&  <TransactionListPage changePage={this.changePage} transtype={'costs'}/>}
      </div>
    );

  }
  
}

export default App;
