import React from "react";
import ExpenseForm from "./expense_form/ExpenseForm";
import './NewExpense.css'


const NewExpense = (props) => {
    const onSave = (new_expense={})=>{
        const expense_data = {
            ...new_expense,
            id: Math.random().toString(),
        }
        props.onAddExpense(expense_data);
    }

    return( 
    <div className="new-expense ">
    <ExpenseForm onFormSubmit = {onSave}/>
    </div>
    );
}


export default NewExpense;