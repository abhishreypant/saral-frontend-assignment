// KanbanPage.test.tsx
import { render, screen } from "@testing-library/react";
import KanbanPage from "../pages/KanbanPage";
import "@testing-library/jest-dom/extend-expect";

describe("KanbanPage component", () => {
	beforeEach(() => {
		render(<KanbanPage />);
	});

	test("renders TopBar component", () => {
		expect(screen.getByTestId("topbar")).toBeInTheDocument();
	});

	test("renders Board component", () => {
		expect(screen.getByTestId("board")).toBeInTheDocument();
	});
});
