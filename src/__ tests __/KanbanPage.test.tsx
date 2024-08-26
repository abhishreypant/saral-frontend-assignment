// KanbanPage.test.tsx
import { render, screen } from "@testing-library/react";
import KanbanPage from "../pages/KanbanPage";
import "@testing-library/jest-dom/extend-expect";

describe("KanbanPage component", () => {
	// Clear any mocks and renderings before each test
	beforeEach(() => {
		render(<KanbanPage />);
	});

	test("renders TopBar component", () => {
		// Check if the TopBar component is in the document
		expect(screen.getByTestId("topbar")).toBeInTheDocument();
	});

	test("renders Board component", () => {
		// Check if the Board component is in the document
		expect(screen.getByTestId("board")).toBeInTheDocument();
	});
});
