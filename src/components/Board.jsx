import React, { useState } from "react";
import "../styles/Board.css";
import Element from "./Element";

const Board = () => {
	const [selectedElement, setSelectedElement] = useState(null);

	const handleElementClick = (elementType) => {
		setSelectedElement(elementType);
	};
	return (
		<div className="board">
			<Element
				type="fire"
				className="element-1"
				isSelected={selectedElement === "fire"}
				onClick={() => handleElementClick("fire")}
			/>
			<Element
				type="water"
				className="element-2"
				isSelected={selectedElement === "water"}
				onClick={() => handleElementClick("water")}
			/>
			<Element
				type="earth"
				className="element-3"
				isSelected={selectedElement === "earth"}
				onClick={() => handleElementClick("earth")}
			/>
			<Element
				type="air"
				className="element-4"
				isSelected={selectedElement === "air"}
				onClick={() => handleElementClick("air")}
			/>
		</div>
	);
};

export default Board;
