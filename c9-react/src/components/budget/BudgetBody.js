import React, {useState} from 'react';
import BudgetEntry from "./BudgetEntry";
import BudgetDetails from "./BudgetDetails";
import BudgetTotal from './BudgetTotal';
import "./budgetBody.css"


const BudgetBody = (props) => {
    let {balance, setBalance} = props
    const [budget, setBudget] = useState([])

    const [total, setTotal] = useState(0)

return (
        <div className="budget-body">
            <div className="text-intro">
            <h1>Welcome to your personal budget</h1>
            <p>Enter the price, description and give a special name to your expenditure</p>
            </div>
            <div className="budget-body-sectioned">
                <BudgetEntry budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance} total={total} setTotal={setTotal}/>
                <BudgetDetails budget={budget} setBudget={setBudget} balance={balance}setBalance={setBalance} total={total} setTotal={setTotal}/>
                <BudgetTotal total={total}/>
            </div>
        </div>
    );
};

export default BudgetBody;