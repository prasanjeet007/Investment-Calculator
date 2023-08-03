import React, { useState } from "react";
import "./calculator.css";

export default function Calculator({ calculate }) {
  const [formState, setFormState] = useState({
    currentSavings: "",
    yearlyContribution: "",
    expectedReturn: "",
    duration: "",
  });
  const submitHandler = (e) => {
    calculate(formState);
    e.preventDefault();
  };
  const resetHandler = () => {
    setFormState({
      currentSavings: "",
      yearlyContribution: "",
      expectedReturn: "",
      duration: "",
    });
    console.log(formState);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formState?.currentSavings}
            onChange={(e) =>
              setFormState((prevState) => {
                return {
                  ...prevState,
                  currentSavings: e.target.value,
                };
              })
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formState?.yearlyContribution}
            onChange={(e) =>
              setFormState((prevState) => {
                return {
                  ...prevState,
                  yearlyContribution: e.target.value,
                };
              })
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={formState?.expectedReturn}
            onChange={(e) =>
              setFormState((prevState) => {
                return {
                  ...prevState,
                  expectedReturn: e.target.value,
                };
              })
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formState?.duration}
            onChange={(e) =>
              setFormState((prevState) => {
                return {
                  ...prevState,
                  duration: e.target.value,
                };
              })
            }
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
