import React from "react";
import "../styles/Button.css";

const Button = ({ text, buttonStyle, onClick }) => {
	return (
		<button
			className={buttonStyle}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
