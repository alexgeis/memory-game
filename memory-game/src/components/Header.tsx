import styles from "./Header.module.css";

function Header({ score, highScore }: headerProps) {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Memory Game</h1>
			<p className={styles.description}>
				Earn points by clicking on a card, but don't pick the same card twice!
			</p>
			<div className={styles.scoreWrapper}>
				<p className={styles.scoreCurr}>Score: {score}</p>
				<p className={styles.scoreHigh}>High Score: {highScore}</p>
			</div>
			<p
				className={styles.gameStatus}
				id="gameStatus"
			>
				YOU LOSE!!! (please play again??)
			</p>
		</div>
	);
}

export default Header;
