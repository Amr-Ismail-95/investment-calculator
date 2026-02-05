import React from "react";
import investmentHeaderImg from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <div id="header">
      <img src={investmentHeaderImg} alt="investmentHeaderImg" />
      <h1>React Investment Calculator</h1>
    </div>
  );
};

export default Header;
