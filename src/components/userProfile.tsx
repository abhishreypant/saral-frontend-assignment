import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";

const UserProfile = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	return (
		<div className="relative">
			<div
				className="w-9 h-9 flex items-center justify-center text-gray-700 bg-white rounded-full cursor-pointer  hover:bg-gray-100 transition-all active:scale-90"
				onClick={toggleModal}>
				<UserIcon className="size-5" strokeWidth={2} />
			</div>
			{isModalOpen && (
				<UserProfileModal
					onClose={() => {
						toggleModal();
					}}
				/>
			)}{" "}
			{/* Render the modal conditionally */}
		</div>
	);
};

export default UserProfile;

const UserProfileModal = ({ onClose }: { onClose: () => void }) => {
	return (
		<div className="absolute right-0 mt-2 w-48 overflow-hidden bg-white shadow-lg rounded-lg text-gray-700 z-50">
			<div className="p-4 text-sm">
				<div className="font-medium text-sm">John Doe</div>{" "}
				<div className="text-gray-500 text-xs">john.doe@example.com</div>{" "}
			</div>
			<button className="w-full px-4 py-2 text-sm text-red-600 border-t border-red-200 hover:bg-red-50">
				Log Out
			</button>
			<button
				className="w-full px-4 py-2 text-sm text-gray-600 border-t border-red-200 hover:bg-gray-50"
				onClick={() => {
					onClose();
				}}>
				Close
			</button>
		</div>
	);
};
