import React,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [inputTitle,setTitle] = useState('');//useState returns an array with 2 elements
    const onTitleChange = (event) => setTitle(event.target.value); //event.target.value is the value of the input
    const [inputAmount,setAmount] = useState(''); //inputAmount is the current value of the input
    const onamtChange = (event) => setAmount(event.target.value);//setAmount is the function to change the value of the input
    const [inputDate,setDate] = useState('');//inputDate is the current value of the input
    const onDateChange = (event) => setDate(event.target.value);//setDate is the function to change the value of the input
    const onSubmit = (event)=>{
        event.preventDefault();
        const new_expense = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate),
        }
        props.onFormSubmit(new_expense);
        setTitle('');
        setAmount('');
        setDate('');

       // console.log(inputTitle,inputAmount,inputDate);
    }
    return(
        <form action="" onSubmit={onSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text"  name="expense_title" id="title" value={inputTitle} onChange={onTitleChange}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" name="expense_amount" id="amount" min="0" value={inputAmount} onChange={onamtChange}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date"  name="expense_date" id="date" value={inputDate} onChange={onDateChange}/>
            </div>
        </div>
        
    
            <div className="new-expense__actions">
                <button id="cancel">Cancel</button>
                <button type="submit">Add Expense</button>
        
            </div>
        
    </form>
    )
}

export default ExpenseForm;