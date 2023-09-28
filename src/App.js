import "./styles/App.css";
import Button from "./components/Button";

function App() {
	return (
		<div className="App">
			<h1>Home</h1>
			<Button
				buttonStyle="primary"
				text="start"
			/>
		</div>
	);
}

export default App;
