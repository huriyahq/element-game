import React from "react";
import "../styles/Scoreboard.css";

const ScoreBoard = ({ playerScore, computerScore }) => {
	return (
		<div className="scoreboard">
			<p>
				Player: <span>{playerScore}</span>
			</p>
			<p>
				Computer: <span> {computerScore}</span>
			</p>
		</div>
	);
};

export default ScoreBoard;
