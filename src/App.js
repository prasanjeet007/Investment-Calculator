import { useState } from "react";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  const [result, setResult] = useState(null);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    // do something with yearlyData ...
    setResult(yearlyData);
  };
  return (
    <div>
      <Header />
      <Calculator calculate={calculateHandler} />
      {result?.length > 0
        ? result.map((resultData, i) => <Table key={i} data={resultData} />)
        : "No Data Available"}
    </div>
  );
}

export default App;
