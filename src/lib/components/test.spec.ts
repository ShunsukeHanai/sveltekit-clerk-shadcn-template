import { render, screen } from "@testing-library/svelte";
import Test from "./test.svelte";

describe("Test", () => {
	test("Helloが表示される", () => {
		render(Test);
		const text = screen.getByText("Hello");
		expect(text).toBeInTheDocument();
	});
});
