import { ArrowRight } from "lucide-react";
import Button from "../components/essentials/Button";
import { iconProps } from "../utils/props";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className="flex min-h-screen bg-gray-200 items-center justify-center gap-8 flex-col">
				<h1 className="text-3xl text-center text-gray-600 leading-[1.6]">
					<span className="text-gray-900">Hey 👋, This is Abhishrey.</span>{" "}
					<br /> Here's my Submission at Saral for The Kanban Project
				</h1>

				<Button
					onClick={() => {
						navigate("/kanban");
					}}>
					View Kanban Board <ArrowRight {...iconProps} />{" "}
				</Button>
			</div>
		</div>
	);
};

export default HomePage;
