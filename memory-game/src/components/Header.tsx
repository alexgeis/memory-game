import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./Header.module.css";

function Header() {
	const [count, setCount] = useState(0);

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Memory Game</h1>
			<p className={styles.description}>
				Earn points by clicking on a card, but don't pick the same one twice!
			</p>
			<p
				className={styles.gameStatus}
				id="gameStatus"
			>
				YOU LOSE!!!
			</p>
		</div>
	);
}

export default Header;
