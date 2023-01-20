// Imports
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// To Test
import App from "../App";

// Tests
describe("App component", () => {
	it("renders new user score as 0", () => {
		// since screen does not have the container property, we'll destructure render to obtain container for this test
		const { container } = render(<App />);
		expect(container).toMatchSnapshot();
	});

	it("increase score by 1 after card click", () => {
		render(<App />);
		const img = screen.getByRole("img", { name: "" });

		userEvent.click(img);

		expect(screen.getByRole("heading").textContent).toMatch("1");
	});
});
