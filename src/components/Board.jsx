import React, { useState } from "react";
import "../styles/Board.css";
import Element from "./Element";

const Board = () => {
	const [playerSelectedElement, setPlayerSelectedElement] = useState(null);
	const [computerSelectedElement, setComputerSelectedElement] = useState(null);

	const handleElementClick = (elementType) => {
		setPlayerSelectedElement(elementType);
		selectComputerElement();
	};

	const selectComputerElement = () => {
		const elements = ["fire", "water", "earth", "air"];
		const index = Math.floor(Math.random() * elements.length);
		const element = elements[index];
		setComputerSelectedElement(element);
	};

	return (
		<div className="board">
			<div className="options">
				<Element
					type="fire"
					className="element-1"
					isSelected={playerSelectedElement === "fire"}
					onClick={() => handleElementClick("fire")}
				/>
				<Element
					type="water"
					className="element-2"
					isSelected={playerSelectedElement === "water"}
					onClick={() => handleElementClick("water")}
				/>
				<Element
					type="earth"
					className="element-3"
					isSelected={playerSelectedElement === "earth"}
					onClick={() => handleElementClick("earth")}
				/>
				<Element
					type="air"
					className="element-4"
					isSelected={playerSelectedElement === "air"}
					onClick={() => handleElementClick("air")}
				/>
			</div>
			<div className="selections">
				{playerSelectedElement && (
					<Element
						type={playerSelectedElement}
						className="element-player"
						isSelected={true}
					/>
				)}
				{computerSelectedElement && (
					<Element
						type={computerSelectedElement}
						className="element-computer"
						isSelected={true}
					/>
				)}
			</div>
		</div>
	);
};

export default Board;
