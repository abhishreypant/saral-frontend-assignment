import { ArrowUpRight } from "lucide-react";
import Influencer from "../../types/influencer";
import { useState } from "react";
import { UsersIcon } from "@heroicons/react/24/outline";
import InfluencerModal from "./InfluencerModal";
import { useKanbanStore } from "../../stores/kanban";
import { useDraggedStore } from "../../stores/draggedInfo";
import useDroppedStore from "../../stores/dropppedInfo";

const formatNumber = (num: number) => {
	if (num >= 1_000_000) {
		return (num / 1_000_000).toFixed(1) + "M";
	} else if (num >= 1_000) {
		return (num / 1_000).toFixed(1) + "K";
	}
	return num.toString();
};

const InfluencerCard = ({
	index,
	influencer,
	color = "purple",
}: {
	index: [number, number];
	influencer: Influencer;
	color: string;
}) => {
	const {
		name,
		username,
		image,
		profileLink,
		followerCount,
		estimatedPromotionPrice,
		platform,
		notifications,
	} = influencer;

	const [showMoreButton, setShowMoreButton] = useState<boolean>(false);
	const [showInfluencerModal, setShowInfluencerModal] =
		useState<boolean>(false);

	const { removeInfluencer, pushInfluencer } = useKanbanStore();
	const { setIsDragging, draggedInfluencer, setDraggedInfluencer } =
		useDraggedStore();
	const { isDropped, setIsDropped } = useDroppedStore();

	return (
		<div>
			{showInfluencerModal && (
				<div className="flex items-center justify-center absolute top-0 left-0 w-full h-screen bg-gray-900/30 backdrop-blur-sm z-40">
					<InfluencerModal
						influencer={influencer}
						onClose={() => {
							setShowInfluencerModal(false);
						}}
						// onAdd={() => {
						// 	console.log("hello");
						// }}
					/>
				</div>
			)}
			<div
				className={`max-h-[160px] cursor-grab hover:shadow-lg transition-all  duration-300 p-3.5 shadow-md  border-t-[6px] hover:-translate-y-0.5 border-${color}-400/50 overflow-hidden text-sm bg-white  flex  flex-col gap-5 active:cursor-grabbing rounded-md relative z-0 ${
					!isDropped ? "opacity-70" : "opacity-100"
				}`}
				draggable={true}
				onDragStart={() => {
					setIsDragging(true);
					// console.log("drag started");
					setDraggedInfluencer(influencer);

					setTimeout(() => {
						removeInfluencer(username);
					}, 200);

					setIsDropped(false);
				}}
				onDrag={(e) => {
					e.preventDefault();
					// console.log("dragging");
					// console.log(draggedInfluencer);
				}}
				onDragEnd={(e) => {
					// console.log("drag ended");
					e.preventDefault();

					if (!isDropped) {
						pushInfluencer(index[0], draggedInfluencer);
					}
					setIsDragging(false);
					setIsDropped(true);
				}}
				onDragEndCapture={(e) => {
					// console.log("drag ended");
					e.preventDefault();

					if (!isDropped) {
						pushInfluencer(index[0], draggedInfluencer);
					}
					setIsDragging(false);
					setIsDropped(true);
				}}
				onMouseOver={() => {
					setShowMoreButton(true);
				}}
				onMouseEnter={() => {
					setShowMoreButton(true);
				}}
				onMouseLeave={() => {
					setShowMoreButton(false);
				}}>
				{showMoreButton && (
					<button
						className="text-[8px] border absolute p-0 right-2 top-2 flex gap-1 rounded-full px-2 items-center hover:bg-gray-900 hover:text-white transition-all"
						onClick={() => {
							setShowInfluencerModal(true);
						}}>
						More <ArrowUpRight size={8} />
					</button>
				)}
				<div className="flex gap-2.5 items-center">
					<div className="w-fit h-fit relative">
						<img
							src={image}
							className="w9 h-9 rounded-full object-cover pointer-events-none"
						/>

						{notifications && (
							<div className="w-4  text-[10px]  flex items-center justify-center h-4  absolute -top-1 -right-1 bg-red-600 rounded-full text-white">
								{notifications > 0 && notifications}
							</div>
						)}
					</div>

					<div className=" select-none flex flex-col gap-[1px]">
						<h3 className="font-medium text-[14px] break-all">{name}</h3>
						<h4 className="text-[14px] text-gray-500 break-all">@{username}</h4>
					</div>
				</div>
				<div className="flex items-center text-gray-700 justify-between">
					<div className="flex items-center gap-1 select-none">
						<UsersIcon className="size-4 text-gray-400" />
						{followerCount && followerCount > 100
							? String(`${formatNumber(followerCount)}`)
							: `${followerCount}`}
					</div>

					<div className="flex items-center  select-none">
						<span className="text-gray-400">
							<img width={20} src="/src/assets/icons/moneybag.svg" />
						</span>
						{`$${estimatedPromotionPrice}`}
					</div>

					<div className="cursor-pointer hover:opacity-80 transition-all">
						<a href={profileLink}>
							{platform === "Instagram" ? (
								<img src="/src/assets/icons/instagram.svg" width={16} />
							) : platform === "YouTube" ? (
								<img src="/src/assets/icons/youtube.svg" width={20} />
							) : platform === "TikTok" ? (
								<img src="/src/assets/icons/tiktok.svg" width={16} />
							) : (
								<img src="/src/assets/icons/instagram.svg" />
							)}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfluencerCard;
