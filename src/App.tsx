import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KanbanPage from "./pages/KanbanPage";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		document.title = "Saral Frontend Assignment - By Abhishrey ";
	}, []);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/kanban" element={<KanbanPage />} />
			</Routes>
		</Router>
	);
}

export default App;
