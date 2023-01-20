import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import App from "../App";

describe("App component", () => {
	it("renders correct heading", () => {
		const { getByRole } = render(<App />);
		expect(getByRole("heading").textContent).toMatch(/our first test/i);
	});
});
