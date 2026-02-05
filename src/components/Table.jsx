import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Table = ({ input }) => {
  const results = calculateInvestmentResults(input);
  const initial =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  console.log(initial);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.year * result.annualInvestment -
            initial;

          const totalInvested = result.valueEndOfYear - totalInterest;

          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
