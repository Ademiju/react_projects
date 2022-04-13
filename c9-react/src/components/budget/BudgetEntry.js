import React, {useState} from 'react';

const BudgetEntry = (props ) => {
    let {budget, setBudget, balance, setBalance,total,setTotal} = props

    const [input, setInput] = useState({budgetName: '', budgetAmount: '', budgetDescription:'', date:''})

    const handleInput = (e) => {
        setInput({...input, [e.target.name] : e.target.value})
    }
    

    const createBudget = () => {
        let budgetData = [{...input, date: Date.now()}, ...budget]
        let savedBudget = {...input}
        if((balance - savedBudget.budgetAmount > 0)){
            setBudget(budgetData)

            let newBalance = balance -savedBudget.budgetAmount
            setBalance(newBalance)
            let totalBudget = total +Number(savedBudget.budgetAmount)
            setTotal(totalBudget)                                                  

        }else setBalance((initial)=>{
             setBalance(initial)
            return alert("Budget Balance exceeded")
        })
    }

    return (
        <div className="budget-entry-container">
        <div className="budgetEntry">
            <p>Budget Name</p>
            <input name="budgetName" onChange={handleInput} />
        </div>
            <div className="budgetEntry">
                <p>Budget Amount</p>
                <input name="budgetAmount" onChange={handleInput} />
            </div>
            <div className="budgetEntry">
                <p>Budget description</p>
                <input name="budgetDescription" onChange={handleInput} />
            </div>
            <button onClick={createBudget}>Enter</button>
        </div>
    );
};

export default BudgetEntry;