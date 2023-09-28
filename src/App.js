import "./styles/App.css";
import Button from "./components/Button";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";

function App() {
	return (
		<div className="app">
			<h1>Element Game</h1>
			<ScoreBoard />
			<div className="app-instructions">
				<p></p>
			</div>
			<Board />
			<div className="app-options">
				<Button
					buttonStyle="primary"
					text="start"
				/>
				<Button
					buttonStyle="secondary"
					text="reset"
				/>
			</div>
		</div>
	);
}

export default App;
