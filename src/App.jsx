import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/inputForm";
import Table from "./components/Table";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = investment.duration >= 1;

  const handleChange = (identifier, newValue) => {
    setInvestment((prevInvestment) => {
      return {
        ...prevInvestment,
        [identifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <InputForm investment={investment} OnChange={handleChange} />
      {inputIsValid && <Table input={investment} />}
      {!inputIsValid && <p className="center">INVALID DURATION INPUT</p>}
    </>
  );
}

export default App;
