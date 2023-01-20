import { MouseEventHandler, useState } from "react";
import styles from "./MemoryGame.module.css";

function MemoryGame({ dogs, onClick }: memGameProps) {
	// PSEUDO FOR NEXT STEPS
	/* 
		1. add points each time a unique card is selected
		2. upon endGame(), reset score and text
			2.1 need mechanism to restart game - either a button or a countdown
		3. Best score display: showing highest score reached (save in local storage?)
		
		~optional~	
		1. Leaderboard?
	*/

	return (
		<div className={styles.wrapper}>
			{dogs.map((dog: Dog) => {
				return (
					<div
						className={styles.card}
						key={dog.id}
						onClick={onClick}
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
