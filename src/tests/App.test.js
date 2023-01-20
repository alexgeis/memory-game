import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import App from "../App";

test("that jest is working", () => {
	expect(true).toBe(true);
});

describe("App component", () => {
	it("renders correct heading", () => {
		const { getByRole } = render(<App />);
		expect(getByRole("heading").textContent).toMatch(/our first test/i);
	});
});
