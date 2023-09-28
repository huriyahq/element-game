import React from "react";
import "../styles/Board.css";
import Element from "./Element";

const Board = () => {
	return (
		<div className="board">
			<Element text="fire" />
			<Element text="water" />
			<Element text="earth" />
			<Element text="air" />
		</div>
	);
};

export default Board;
