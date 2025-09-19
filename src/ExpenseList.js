import React from 'react';

export default function ExpenseList() {
  // Dummy expense list
  const expenses = [
    { id: 1, desc: 'Groceries', amount: 50 },
    { id: 2, desc: 'Transport', amount: 20 }
  ];

  return (
    <div>
      <h3>Expenses</h3>
      <ul className="list-group">
        {expenses.map(exp => (
          <li key={exp.id} className="list-group-item">
            {exp.desc}: ${exp.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}