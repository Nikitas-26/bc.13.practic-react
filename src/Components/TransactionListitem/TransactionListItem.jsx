import { Component } from "react";

class TransactionListItem extends Component {
    state = { 
        isOpenMenu: false
     } 
     switchMenu = ()=> this.setState((prevState)=>({ isOpenMenu:!prevState.isOpenMenu}))
    render() { 
        return ( <li>
            <p>date</p>
            <p>time</p>
            <p>amount</p>
            <p>currency</p>
            <button onClick={this.switchMenu}>...</button>
            {this.state.isOpenMenu && 
            <div>
            <button>Удалить</button>   
            <button>Изменить</button>   
            </div>
            }
        </li>);
    }
}
 
export default TransactionListItem;