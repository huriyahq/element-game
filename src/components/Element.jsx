import React from "react";
import "../styles/Element.css";
import { FireIcon, WaterIcon, EarthIcon, AirIcon } from "../utils/icons";

const Element = ({ type }) => {
	const lowerCaseType = type.toLowerCase();
	let icon;

	switch (lowerCaseType) {
		case "fire":
			icon = (
				<FireIcon
					className="element"
					sx={{ fontSize: 80 }}
				/>
			);
			break;
		case "water":
			icon = (
				<WaterIcon
					className="element"
					sx={{ fontSize: 80 }}
				/>
			);
			break;
		case "earth":
			icon = (
				<EarthIcon
					className="element"
					sx={{ fontSize: 80 }}
				/>
			);
			break;
		case "air":
			icon = (
				<AirIcon
					className="element"
					sx={{ fontSize: 80 }}
				/>
			);
			break;
		default:
			icon = null;
	}
	return <div className="element-box">{icon}</div>;
};

export default Element;
