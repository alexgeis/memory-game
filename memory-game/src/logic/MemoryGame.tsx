import { useState } from "react";
import styles from "./MemoryGame.module.css";

import dogPhoto1 from "../assets/images/beauceron.jpg";
import dogPhoto2 from "../assets/images/bull-terrier.jpg";
import dogPhoto3 from "../assets/images/collie.jpg";
import dogPhoto4 from "../assets/images/dachshund.jpg";
import dogPhoto5 from "../assets/images/golden.jpg";
import dogPhoto6 from "../assets/images/husky.jpg";
import dogPhoto7 from "../assets/images/mutt.jpg";
import dogPhoto8 from "../assets/images/pom.jpg";
import dogPhoto9 from "../assets/images/shiba.jpg";
import dogPhoto10 from "../assets/images/shiba-hat.jpg";
import dogPhoto11 from "../assets/images/bandana.jpg";
import dogPhoto12 from "../assets/images/stick-boi.jpg";

type Dog = {
	id: number;
	photo: string;
};

function MemoryGame() {
	const dogData: Dog[] = [
		{ id: 1, photo: dogPhoto1 },
		{ id: 2, photo: dogPhoto2 },
		{ id: 3, photo: dogPhoto3 },
		{ id: 4, photo: dogPhoto4 },
		{ id: 5, photo: dogPhoto5 },
		{ id: 6, photo: dogPhoto6 },
		{ id: 7, photo: dogPhoto7 },
		{ id: 8, photo: dogPhoto8 },
		{ id: 9, photo: dogPhoto9 },
		{ id: 10, photo: dogPhoto10 },
		{ id: 11, photo: dogPhoto11 },
		{ id: 12, photo: dogPhoto12 },
	];

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
		}
		setClickedDogIds([...clickedDogIds, id]);
		setDogs(shuffle(dogs));
	};

	// PSEUDO FOR NEXT STEPS
	/* 
		1. add points each time a unique card is selected
		2. upon endGame(), reset score and text
			2.1 need mechanism to restart game - either a button or a countdown
		3. Best score display: showing highest score reached (save in local storage?)
		
		~optional~	
		1. Leaderboard?
	*/

	const endGame = (): void => {
		const el: HTMLElement = document.querySelector("#gameStatus")!;
		el.style.display = "block";
	};

	return (
		<div className={styles.wrapper}>
			{dogs.map((dog: Dog) => {
				return (
					<div
						className={styles.card}
						key={dog.id}
						onClick={clickHandler}
					>
						<span className={styles.cardImgWrap}>
							<img
								data-id={dog.id}
								src={dog.photo}
								alt="dog photo"
							/>
						</span>
					</div>
				);
			})}
		</div>
	);
}

export default MemoryGame;
