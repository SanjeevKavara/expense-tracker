import React from "react";
import ExpenseDate from "../ExpenseDate/Expense-Date";
import './Expense.css';


const ExpenseItem = (props) => {   //caps for react components, small for functions
    let {
        title = '',
        amount = 0,date = new Date()} = props;
   
    // const date = new Date().toISOString();
    // const amount = 10;
    // const title = 'Car Insurance';
    // const [title,setTitle] = useState(props.title); //to change the title,refresh the title and set it to a new value refresh particular component
    // const buttonClick = () => {
    //     setTitle('Updated');
    //     console.log(title);

    // };
    return (
    
        <div className="expense-item">
            <ExpenseDate date = {date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            {/* <button onClick={buttonClick} id = "btn-click">Change Title</button> */}
        </div>
    )

};

export default ExpenseItem;