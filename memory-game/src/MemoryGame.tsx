import { useState } from "react";
import styles from "./MemoryGame.module.css";

import dogPhoto1 from "./assets/images/beauceron.jpg";
import dogPhoto2 from "./assets/images/bull-terrier.jpg";
import dogPhoto3 from "./assets/images/collie.jpg";
import dogPhoto4 from "./assets/images/dachshund.jpg";
import dogPhoto5 from "./assets/images/golden.jpg";
import dogPhoto6 from "./assets/images/husky.jpg";
import dogPhoto7 from "./assets/images/mutt.jpg";
import dogPhoto8 from "./assets/images/pom.jpg";
import dogPhoto9 from "./assets/images/shiba.jpg";
import dogPhoto10 from "./assets/images/shiba-hat.jpg";

function MemoryGame() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<span className={styles.cardImgWrap}>
					<img
						src={dogPhoto1}
						alt="dog photo"
					/>
				</span>
			</div>
			<div className={styles.card}>
				<span className={styles.cardImgWrap}>
					<img
						src={dogPhoto2}
						alt="dog photo"
					/>
				</span>
			</div>
			<div className={styles.card}>
				<span className={styles.cardImgWrap}>
					<img
						src={dogPhoto3}
						alt="dog photo"
					/>
				</span>
			</div>
			<div className={styles.card}>
				<span className={styles.cardImgWrap}>
					<img
						src={dogPhoto4}
						alt="dog photo"
					/>
				</span>
			</div>
			<div className={styles.card}>
				<span className={styles.cardImgWrap}>
					<img
						src={dogPhoto5}
						alt="dog photo"
					/>
				</span>
			</div>
			<div className={styles.card}>
				<span className={styles.cardImgWrap}>
					<img
						src={dogPhoto6}
						alt="dog photo"
					/>
				</span>
			</div>
			<div className={styles.card}>
				<span className={styles.cardImgWrap}>
					<img
						src={dogPhoto7}
						alt="dog photo"
					/>
				</span>
			</div>
			<div className={styles.card}>
				<span className={styles.cardImgWrap}>
					<img
						src={dogPhoto8}
						alt="dog photo"
					/>
				</span>
			</div>
			<div className={styles.card}>
				<span className={styles.cardImgWrap}>
					<img
						src={dogPhoto9}
						alt="dog photo"
					/>
				</span>
			</div>
			<div className={styles.card}>
				<span className={styles.cardImgWrap}>
					<img
						src={dogPhoto10}
						alt="dog photo"
					/>
				</span>
			</div>
		</div>
	);
}

export default MemoryGame;
