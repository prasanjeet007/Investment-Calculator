import React from "react";
import "./table.css";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
export default function Table({ data, investment }) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data?.year}</td>
          <td>{formatter.format(data?.savingsEndOfYear)}</td>
          <td>{formatter.format(data?.yearlyInterest)}</td>
          <td>
            {formatter.format(
              data?.savingsEndOfYear -
                investment -
                data?.yearlyContribution * data?.year
            )}
          </td>
          <td>{formatter.format(investment + data?.yearlyContribution)}</td>
        </tr>
      </tbody>
    </table>
  );
}
