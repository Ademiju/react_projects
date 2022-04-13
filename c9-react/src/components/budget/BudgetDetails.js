import React from 'react';
import { toDateTimeLocal } from '../../util';
import './budgetBody.css'

const BudgetDetails = (props) => {
    let {budget, setBudget,balance, setBalance, total, setTotal} = props
    
    const deleteEntry = (ObjectId, budgetAmount) => {
        let newObject = [...budget]
        setBudget(newObject.filter((data, index) => index !== ObjectId)
        )
         let reversedBalance = balance + budgetAmount
        setBalance(reversedBalance)
        let reversedTotalBudget = total - budgetAmount
        setTotal(reversedTotalBudget)
        

    }

    return (
        <div className="budget-details-container">
            <h1>Details</h1>
            {budget.length > 0
                ?
                <table>
                    <tr className='table-header'>
                        <th>Date</th>
                        <th>Budget Name</th>
                        <th>Amount</th>
                        <th>Description</th>
                
                    </tr>
                    {budget.map((data,index) =>
                        <tr key={index} className="data-row">
                            <td>{toDateTimeLocal (data.date)}</td>
                            <td>{data.budgetName}</td>
                            <td>{data.budgetAmount}</td>
                            <td>{data.budgetDescription}</td>
                            <td>
                                <button onClick={()=> deleteEntry(index,+data.budgetAmount)}style={{backgroundColor: "red", color: "white",padding:"2px 10px",border:"unset"}}>
                                    Delete 
                                </button>
                            </td>
                        </tr>)}
                </table>
                :
                "Empty"}
        </div>
    );
};

export default BudgetDetails;