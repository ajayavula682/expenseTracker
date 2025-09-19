import React, { useState } from 'react';

export default function ExpenseForm() {
  const [amount, setAmount] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add expense logic here
    alert(`Added expense: ${desc} - $${amount}`);
    setAmount('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Description</label>
        <input type="text" className="form-control" value={desc}
          onChange={e => setDesc(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input type="number" className="form-control" value={amount}
          onChange={e => setAmount(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-info">Add Expense</button>
    </form>
  );
}