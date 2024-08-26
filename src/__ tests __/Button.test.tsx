import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../components/essentials/Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
	test("renders button with correct text", () => {
		render(<Button>Click me</Button>);
		expect(screen.getByText("Click me")).toBeInTheDocument();
	});

	test("applies primary styles by default", () => {
		render(<Button>Primary Button</Button>);
		const button = screen.getByText("Primary Button");
		expect(button).toHaveClass("bg-white text-purple-700");
	});

	test("applies secondary styles when variant is set to secondary", () => {
		render(<Button variant="secondary">Secondary Button</Button>);
		const button = screen.getByText("Secondary Button");
		expect(button).toHaveClass("bg-white text-gray-700");
	});

	test("passes through additional props", () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Clickable</Button>);
		fireEvent.click(screen.getByText("Clickable"));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test("applies additional className", () => {
		render(<Button className="extra-class">Custom Button</Button>);
		const button = screen.getByText("Custom Button");
		expect(button).toHaveClass("extra-class");
	});

	test("includes base styles", () => {
		render(<Button>Styled Button</Button>);
		const button = screen.getByText("Styled Button");
		expect(button).toHaveClass(
			"h-9 flex items-center gap-2 cursor-pointer transition-all py-2 px-3 rounded-md hover:scale-105 active:scale-95 font-medium"
		);
	});
});
