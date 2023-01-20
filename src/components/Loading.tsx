import styles from "./Loading.module.css";
import loadingCirclePNG from "../assets/icons/loading/loading-circle-100.png";

function Loading() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Game cards loading...</h1>
			<img
				src={loadingCirclePNG}
				className={styles.loadingIcon}
				alt="loading icon spinner"
			/>
		</div>
	);
}

export default Loading;
