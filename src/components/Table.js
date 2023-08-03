import React from "react";
import "./table.css";
export default function Table({ data }) {
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
          <td>{data?.savingsEndOfYear}</td>
          <td>{data?.yearlyInterest}</td>
          <td>{data?.yearlyInterest + data?.savingsEndOfYear}</td>
          <td>{data?.yearlyContribution}</td>
        </tr>
      </tbody>
    </table>
  );
}
