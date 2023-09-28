import React from "react";
import "../styles/Scoreboard.css";

const ScoreBoard = () => {
	return (
		<div className="scoreboard">
			<p>
				Player: <span>0</span>
			</p>
			<p>
				Computer: <span>0</span>
			</p>
		</div>
	);
};

export default ScoreBoard;
