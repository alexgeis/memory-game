import { MouseEventHandler, useState } from "react";
import styles from "./MemoryGame.module.css";

function MemoryGame({ dogs, onClick }: memGameProps) {
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
