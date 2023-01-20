import { useState, Suspense, lazy } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
const MemoryGame = lazy(() => delayForDemo(import("./logic/MemoryGame")));

function delayForDemo(promise: any) {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000);
	}).then(() => promise);
}

import Footer from "./components/Footer";
import Loading from "./components/Loading";
import "./App.css";

function App({ dogData }: any) {
	const [score, setScore] = useState<number>(0);
	const [highScore, setHighScore] = useState<any>(
		localStorage.getItem("highScore") || 0
	);

	if (score > highScore) {
		setHighScore(score);
		localStorage.setItem("highScore", highScore);
	}

	// using the Fisher-Yates shuffle algo
	const shuffle = (array: Dog[]): Dog[] => {
		for (let i = array.length - 1; i > 0; i--) {
			const j: number = Math.floor(Math.random() * (i + 1));
			const temp: Dog = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	};
	const shuffledDogs: Dog[] = shuffle(dogData);

	const [dogs, setDogs] = useState<Dog[]>(shuffledDogs);
	const [clickedDogIds, setClickedDogIds] = useState<number[]>([]);

	// event "React.MouseEvent<HTMLElement>" is throwing an error for unknown property dataset
	const clickHandler = (e: any): void => {
		const id: number = +e.target.dataset.id;
		if (clickedDogIds.includes(id)) {
			endGame();
			return;
		}
		setClickedDogIds([...clickedDogIds, id]);
		setScore((score) => score + 1);
		setDogs(shuffle(dogs));
	};

	const endGame = (): void => {
		const el: HTMLElement = document.querySelector("#gameStatus")!;
		el.style.display = "block";

		setTimeout(() => {
			el.style.display = "none";
		}, 2000);

		setScore(0);
	};

	return (
		<div className="App">
			<Header
				score={score}
				highScore={highScore}
			/>
			<Suspense fallback={<Loading />}>
				<MemoryGame
					dogs={dogs}
					onClick={clickHandler}
				/>
			</Suspense>
			<div className="spacer"></div>
			<Footer />
		</div>
	);
}

export default App;
