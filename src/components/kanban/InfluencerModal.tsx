import { ArrowUpRight, X } from "lucide-react";
import { motion } from "framer-motion";
import Influencer from "../../types/influencer";
import { iconProps } from "../../utils/props";
import Button from "../essentials/Button";

const InfluencerModal = ({
	influencer,
	onClose,
}: {
	influencer: Influencer;
	onClose?: () => void;
}) => {
	return (
		<motion.div
			className=" bg-gray-100 m-8 border max-w-[640px] w-full  h-auto overflow-hidden rounded-md shadow-sm max-h-[700px]  overflow-y-auto"
			initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
			animate={{ opacity: 1, y: 0, filter: "none" }}
			transition={{ duration: 0.4 }}>
			<div className="flex items-center  border-b bg-gray-200 border-gray-300 justify-between p-3">
				<h2 className="px-4">About</h2>
				<div
					className="h-9 w-9 flex items-center justify-center hover:bg-gray-300 rounded-md cursor-pointer"
					onClick={() => {
						if (onClose) onClose();
					}}>
					<X />
				</div>
			</div>

			<div className="p-8 ">
				<div className="flex">
					<div className="w-8/12">
						<h1 className="text-2xl">{influencer.name}</h1>
						<h4>@{influencer.username}</h4>
						<p className="font-normal text-sm my-4">
							Spreading smiles through words in a world of emotions. 🌟 Poetry
							and prose for the soul. #EmbraceTheFeels #WordsHeal
						</p>
					</div>
					<div className="w-4/12 flex items-center justify-end">
						<Button>
							View Profile <ArrowUpRight {...iconProps} />{" "}
						</Button>
					</div>
				</div>

				<h6 className="text-sm font-semibold">Gallery</h6>
				<div className=" grid-cols-2  grid flex-wrap my-4  justify-evenly gap-4">
					<div
						className="w-full h-[300px] bg-cover"
						style={{
							backgroundImage:
								"url(https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww)",
						}}></div>

					<div
						className="w-full h-[300px] bg-cover"
						style={{
							backgroundImage:
								"url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww)",
						}}></div>

					<div
						className="w-full h-[300px] bg-cover"
						style={{
							backgroundImage:
								"url(https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww)",
						}}></div>

					<div
						className="w-full h-[300px] bg-cover"
						style={{
							backgroundImage:
								"url(https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D)",
						}}></div>

					<div
						className="w-full h-[300px] bg-cover"
						style={{
							backgroundImage:
								"url(https://plus.unsplash.com/premium_photo-1672509995777-ede97d83c304?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D)",
						}}></div>
				</div>
			</div>
		</motion.div>
	);
};

export default InfluencerModal;
