
import './App.css';
import React, {useState} from 'react';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/new_expense/NewExpense';


const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenseList, setExpenseList] = useState(DUMMY_DATA);
  

  
  const onAddExpense = (new_expense={}) => {
    setExpenseList((prev_expenseList) => { // prev_expenseList is the previous state of expenseList
      return [...prev_expenseList,new_expense ];
    });
    console.log(expenseList);
  }
  
  return (
    <div>
      <NewExpense onAddExpense={onAddExpense}/>
    <Expenses expenses={expenseList}/>
    </div>
  );
}

export default App;
