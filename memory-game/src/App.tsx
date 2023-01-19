import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Header";
import MemoryGame from "./MemoryGame";
import Footer from "./Footer";
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
