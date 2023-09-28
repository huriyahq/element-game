import React, { useState } from "react";
import "../styles/Board.css";
import Element from "./Element";
import ScoreBoard from "./ScoreBoard";

const Board = () => {
	const [playerSelectedElement, setPlayerSelectedElement] = useState(null);
	const [computerSelectedElement, setComputerSelectedElement] = useState(null);
	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);

	const handleElementClick = (elementType) => {
		setPlayerSelectedElement(elementType);
		const computerElement = selectComputerElement();
		updateScores(elementType, computerElement);
	};

	const selectComputerElement = () => {
		const elements = ["fire", "water", "earth", "air"];
		const index = Math.floor(Math.random() * elements.length);
		const element = elements[index];
		setComputerSelectedElement(element);
		return element;
	};

	const updateScores = (playerElement, computerElement) => {
		const outcomes = {
			fire: { beats: ["air"], losesTo: ["water", "earth"] },
			water: { beats: ["fire", "earth"], losesTo: ["air"] },
			earth: { beats: ["fire"], losesTo: ["water", "air"] },
			air: { beats: ["water"], losesTo: ["fire", "earth"] },
		};

		if (playerElement === computerElement) {
			return;
		}

		if (outcomes[playerElement]?.beats.includes(computerElement)) {
			setPlayerScore(playerScore + 1);
		} else {
			setComputerScore(computerScore + 1);
		}
	};

	return (
		<>
			<ScoreBoard
				playerScore={playerScore}
				computerScore={computerScore}
			/>
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
		</>
	);
};

export default Board;
