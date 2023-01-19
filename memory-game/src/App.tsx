import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import MemoryGame from "./logic/MemoryGame";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<MemoryGame />
			<div className="spacer"></div>
			<Footer />
		</div>
	);
}

export default App;
