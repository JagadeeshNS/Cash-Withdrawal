// Write your code here
const DenominationItem = props => {
  const {updateBalance, denominationDetails} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button type="button" className="" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
