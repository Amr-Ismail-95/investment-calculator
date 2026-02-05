import React from "react";
import investmentHeaderImg from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={investmentHeaderImg} alt="investmentHeaderImg" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};

export default Header;
