import { ListFilter, Plus } from "lucide-react";
import Button from "../essentials/Button";
import DropDown from "../essentials/DropDown";
import UserProfile from "../userProfile";
import { iconProps } from "../../utils/props";
import AddCreatorModal from "./addCreatorModel";
import { useState } from "react";
import { useKanbanStore } from "../../stores/kanban";

const TopBar = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const { pushInfluencer } = useKanbanStore();
	return (
		<div>
			<div className="p-2 flex  justify-between items-center   bg-gray-200 rounded-md">
				<div>
					<DropDown
						defaultValue="All"
						options={["Option 1", "Option 2", "Option 3"]}
					/>
				</div>

				<div className="flex gap-3 items-center">
					<UserProfile />

					<Button
						variant="secondary"
						onClick={() => {
							setShowModal(true);
						}}>
						<Plus {...iconProps} /> Add Creator
					</Button>

					<Button>
						<div className="bg-purple-700  w-6 h-6 flex items-center  justify-center rounded-full text-white">
							<ListFilter size={12} />
						</div>{" "}
						Show
					</Button>
				</div>
			</div>
			{showModal && (
				<div className="flex items-center justify-center absolute top-0 left-0 w-full h-screen bg-gray-900/30 backdrop-blur-sm z-50">
					<AddCreatorModal
						onClose={() => {
							setShowModal(false);
						}}
						onAdd={(data) => {
							console.log(data);
							const i = getColIndex(data.column);
							console.log(i);
							pushInfluencer(i, {
								name: data.name,
								username: data.username,
								followerCount: data.followerCount,
								estimatedPromotionPrice: data.estimatedPromotionPrice,
								platform: data.platform,
								image: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyJTIwdXNlcnxlbnwwfHwwfHx8MA%3D%3D`,
								profileLink: data.profileLink,
							});
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default TopBar;

function getColIndex(title: string) {
	title = title.toLowerCase().split(" ").join("").trim();
	console.log(title);

	if (title === "prospects") {
		return 0;
	} else if (title === "reachedout") {
		return 1;
	} else if (title === "inconversation") {
		return 2;
	} else if (title === "onboarded") {
		return 3;
	} else if (title === "rejected") {
		return 4;
	} else {
		return 0;
	}
}
