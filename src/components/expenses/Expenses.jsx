import React from "react";
import ExpenseItem from "./Expense-item/Expense";//data FROM Expenses.jsxx
import './Expenses.css';


const Expenses = (props) => {
const {expenses} = props;
return(

    <div className="expenses">
      {
        expenses.map((each_exp)=>{
          return (
            <ExpenseItem
            key = {each_exp.id}//key is a special prop in react which is used to identify the element in the list
          title={each_exp.title}
          amount = {each_exp.amount}
          date = {each_exp.date}
          />
        )
        })
      }
       

    </div>
)

}

export default Expenses;