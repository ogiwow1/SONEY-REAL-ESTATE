import React, { useState, useEffect } from 'react';

const MortgageCalculator = ({ propertyPrice = 500000 }) => {
  const [downPayment, setDownPayment] = useState(propertyPrice * 0.2);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculatePayment = () => {
    const P = propertyPrice - downPayment;
    const r = (interestRate / 100) / 12;
    const n = loanTerm * 12;

    if (r === 0) return (P / n).toFixed(2);

    const monthly = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(monthly.toFixed(0));
  };

  useEffect(() => {
    calculatePayment();
  }, [downPayment, interestRate, loanTerm]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 max-w-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Payment Calculator</h3>
      
      <div className="mb-6">
        <p className="text-3xl font-bold text-blue-600">${Number(monthlyPayment).toLocaleString()}/mo</p>
        <p className="text-sm text-gray-500">Estimated principal & interest</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Down Payment (${downPayment.toLocaleString()})</label>
          <input 
            type="range" min="0" max={propertyPrice} step="5000"
            value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Interest Rate ({interestRate}%)</label>
          <input 
            type="range" min="1" max="15" step="0.1"
            value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
