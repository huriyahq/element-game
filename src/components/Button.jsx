import React from "react";
import "../styles/Button.css";

const Button = ({ text, buttonStyle }) => {
	return <button class={buttonStyle}>{text}</button>;
};

export default Button;
