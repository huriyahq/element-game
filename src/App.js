import React, { useState } from "react";
import "./styles/App.css";
import Button from "./components/Button";
import Board from "./components/Board";

function App() {
	const [gameStarted, setGameStarted] = useState(false);

	const handleStartClick = () => {
		setGameStarted(true);
	};

	const handleResetClick = () => {
		setGameStarted(false);
	};

	return (
		<div className="app">
			<h1>Element Game</h1>
			<div
				className="game"
				style={{ display: gameStarted ? "block" : "none" }}
			>
				<Board handleResetClick={handleResetClick} />
			</div>
			<div className="app-options">
				{!gameStarted ? (
					<Button
						buttonStyle="primary"
						text="start"
						onClick={handleStartClick}
					/>
				) : null}
			</div>
		</div>
	);
}

export default App;
