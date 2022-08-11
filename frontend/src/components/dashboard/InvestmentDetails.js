import { useInvestmentsContext } from "../hooks/useInvestmentsContext"

const InvestmentDetails = ({ investment }) => {
    const { dispatch } = useInvestmentsContext()

    const handleClick = async () => {
        const response = await fetch('/api/investments/' + investment._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_INVESTMENT', payload: json})
        }
    }
    
    return (
        <div className="investment-details">
            <h4>{investment.instrument}</h4>
            <p><strong> Value: </strong>{investment.value}</p>
            <p>{investment.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default InvestmentDetails