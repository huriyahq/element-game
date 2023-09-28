import React, { useState } from "react";
import "../styles/Board.css";
import Element from "./Element";
import ScoreBoard from "./ScoreBoard";
import Button from "./Button";

const Board = ({ handleResetClick }) => {
	const [playerSelectedElement, setPlayerSelectedElement] = useState(null);
	const [computerSelectedElement, setComputerSelectedElement] = useState(null);
	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);
	const [message, setMessage] = useState("");

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

		let newPlayerScore = playerScore;
		let newComputerScore = computerScore;

		if (playerElement === computerElement) {
			return;
		} else if (outcomes[playerElement]?.beats.includes(computerElement)) {
			newPlayerScore++;
		} else {
			newComputerScore++;
		}

		setPlayerScore(newPlayerScore);
		setComputerScore(newComputerScore);

		gameRound(newPlayerScore, newComputerScore);
	};

	const gameRound = (newPlayerScore, newComputerScore) => {
		if (newPlayerScore + newComputerScore === 5) {
			if (newPlayerScore > newComputerScore) {
				setMessage("Game over. You won this round.");
			} else if (newPlayerScore < newComputerScore) {
				setMessage("Game over. Computer won this round.");
			} else {
				setMessage("Game over. It was a draw.");
			}
		}
	};

	return (
		<>
			<ScoreBoard
				playerScore={playerScore}
				computerScore={computerScore}
			/>
			<div>
				<p className="message">{message}</p>
			</div>
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
				<Button
					text="reset"
					onClick={() => {
						handleResetClick();
						setPlayerSelectedElement(null);
						setComputerSelectedElement(null);
						setPlayerScore(0);
						setComputerScore(0);
						setMessage("");
					}}
					buttonStyle="secondary"
				/>
			</div>
		</>
	);
};

export default Board;
