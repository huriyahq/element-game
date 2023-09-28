import React from "react";
import "../styles/Board.css";
import Element from "./Element";

const Board = () => {
	return (
		<div className="board">
			<Element
				type="fire"
				className="element-1"
			/>
			<Element
				type="water"
				className="element-2"
			/>
			<Element
				type="earth"
				className="element-3"
			/>
			<Element
				type="air"
				className="element-4"
			/>
		</div>
	);
};

export default Board;
