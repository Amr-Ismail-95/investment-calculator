import { useState } from "react";

const InputForm = ({ OnChange, investment }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            id="initialInvestment"
            type="number"
            required
            value={investment.initialInvestment}
            onChange={(e) => {
              OnChange("initialInvestment", e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            id="annualInvestment"
            type="number"
            required
            value={investment.annualInvestment}
            onChange={(e) => {
              OnChange("annualInvestment", e.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            id="expectedReturn"
            type="number"
            required
            value={investment.expectedReturn}
            onChange={(e) => {
              OnChange("expectedReturn", e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            required
            value={investment.duration}
            onChange={(e) => {
              OnChange("duration", e.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
};

export default InputForm;
