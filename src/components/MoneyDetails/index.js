// Write your code here

const MoneyDetails = props => {
  const {
    imgSrc,
    alt,
    className,
    amount,
    textContent,
    datatestid,
    cardClassName,
  } = props
  return (
    <div className={cardClassName}>
      <img src={imgSrc} alt={alt} className={className} />
      <div>
        <p>{textContent}</p>
        <p data-testid={datatestid}>Rs {amount}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
