// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="profile-container">
            <h1 className="s-profile">{initial}</h1>
            <h1 className="sarah">{name}</h1>
          </div>
          <div className="your-balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="amount">{balance}</p>
          </div>
          <p className="rupees">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="suggestion-msg">CHOOSE SUM (IN RUPEES)</p>

          <ul>
            {denominationsList.map(eachList => (
              <DenominationItem
                key={eachList.id}
                denominationDetails={eachList}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
