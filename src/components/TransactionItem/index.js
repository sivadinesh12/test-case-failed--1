// Write your code here

const TransactionItem = props => {
  const {
    key,
    title,
    amount,
    type,
    listClassName,
    textClassName,
    delteTransaction,
    id,
  } = props
  const deleteItem = () => {
    delteTransaction(id)
  }
  return (
    <li className={listClassName} id={key}>
      <p className={textClassName}>{title}</p>
      <p className={textClassName}>Rs {amount}</p>
      <p className={textClassName}>{type}</p>
      <button type="button" onClick={deleteItem} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
