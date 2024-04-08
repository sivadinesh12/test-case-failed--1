import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDeatails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'Income',
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  changeType = event => {
    this.setState({
      type: event.target.value === 'INCOME' ? 'Income' : 'Expenses',
    })
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    if (type === 'Income') {
      this.setState(prevState => ({
        income: prevState.income + amount,
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses + amount,
      }))
    }
    const newTransction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransction],
      title: '',
      amount: '',
      type: 'Income',
    }))
  }

  delteTransaction = id => {
    const {transactionList} = this.state
    const filteredList = transactionList.filter(each => each.id !== id)
    this.setState({transactionList: [...filteredList]})
  }

  render() {
    const {income, expenses, title, amount, type, transactionList} = this.state
    const balance = income - expenses
    return (
      <div className="bg-container">
        <div className="index-container">
          <div className="heading-container">
            <h1>Hi,Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="cards-container">
            <MoneyDeatails
              imgSrc="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
              className="card-img"
              cardClassName="card-container"
              datatestid="balanceAmount"
              textContent="Your Balance"
              amount={balance}
            />
            <MoneyDeatails
              imgSrc="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
              className="card-img"
              cardClassName="card-container"
              datatestid="incomeAmount"
              textContent="Your Income"
              amount={income}
            />
            <MoneyDeatails
              imgSrc="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
              className="card-img"
              cardClassName="card-container"
              datatestid="expensesAmount"
              textContent="Your Expenses"
              amount={expenses}
            />
          </div>
          <div className="transaction-history-container">
            <div className="from-container">
              <form>
                <h1>Add Transaction</h1>
                <div className="input-container">
                  <label htmlFor="title">TITLE</label>
                  <input
                    type="input"
                    id="title"
                    onChange={this.changeTitle}
                    value={title}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="amount">AMOUNT</label>
                  <input
                    type="input"
                    id="amount"
                    onChange={this.changeAmount}
                    value={amount}
                  />
                </div>
                <div>
                  <label htmlFor="type">TYPE</label>
                  <select
                    className="type-dropdown"
                    id="type"
                    onChange={this.changeType}
                    value={type}
                  >
                    <option
                      id={transactionTypeOptions[0].optionId}
                      value={transactionTypeOptions[0].optionId}
                      selected
                    >
                      {transactionTypeOptions[0].displayText}
                    </option>
                    <option
                      id={transactionTypeOptions[1].optionId}
                      value={transactionTypeOptions[1].optionId}
                    >
                      {transactionTypeOptions[1].displayText}
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn"
                  onClick={this.addTransaction}
                >
                  Add
                </button>
              </form>
            </div>
            <div className="history-list-container">
              <h1>History</h1>
              <ul className="list-container">
                <li className="header-list-item">
                  <p className="header-text">Title</p>
                  <p className="header-text">Amount</p>
                  <p className="header-text">Type</p>
                </li>
                {transactionList.map(each => (
                  <TransactionItem
                    key={each.id}
                    id={each.id}
                    title={each.title}
                    amount={each.amount}
                    type={each.type}
                    listClassName="header-list-item"
                    textClassName="header-text"
                    delteTransaction={this.delteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
