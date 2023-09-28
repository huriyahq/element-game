import React from "react";
import "../styles/Button.css";

const Button = ({ text, buttonStyle }) => {
	return <button className={buttonStyle}>{text}</button>;
};

export default Button;
