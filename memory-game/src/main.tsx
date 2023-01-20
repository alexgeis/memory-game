import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { dogData } from "./logic/dogData";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App dogData={dogData} />
	</React.StrictMode>
);
