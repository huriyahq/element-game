import "./styles/App.css";
import Button from "./components/Button";
import Board from "./components/Board";

function App() {
	return (
		<div className="App">
			<h1>Home</h1>
			<Board />
			<Button
				buttonStyle="primary"
				text="start"
			/>
		</div>
	);
}

export default App;
