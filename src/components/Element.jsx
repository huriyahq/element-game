import React from "react";
import "../styles/Element.css";
import { FireIcon, WaterIcon, EarthIcon, AirIcon } from "../utils/icons";

const Element = ({ type, isSelected, onClick }) => {
	const lowerCaseType = type.toLowerCase();
	let icon;

	switch (lowerCaseType) {
		case "fire":
			icon = <FireIcon className={`element ${isSelected ? "selected" : ""}`} />;
			break;
		case "water":
			icon = (
				<WaterIcon className={`element ${isSelected ? "selected" : ""}`} />
			);
			break;
		case "earth":
			icon = (
				<EarthIcon className={`element ${isSelected ? "selected" : ""}`} />
			);
			break;
		case "air":
			icon = <AirIcon className={`element ${isSelected ? "selected" : ""}`} />;
			break;
		default:
			icon = null;
	}

	return (
		<div
			className="element-box"
			onClick={onClick}
		>
			{icon}
		</div>
	);
};

export default Element;
