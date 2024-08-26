import { useState } from "react";
import DropReciever from "./DropReciever";
import InfluencerCard from "./InfluencerCard";
import Influencer from "../../types/influencer";

const Column = ({
	index,
	color = "purple",
	heading,
	influencers,
}: {
	index: number;
	color?: string;
	heading: string;
	influencers?: Influencer[];
}) => {
	const count = influencers?.length;

	const [indicateDrop, setIndicateDrop] = useState<boolean>(false);
	return (
		<div
			className={`w-80 xl:w-full bg-gray-200 transition-all max-h-[900px] overflow-hidden rounded-md ${
				indicateDrop ? "bg-gray-300/50 " : null
			}`}
			onDragOver={(e) => {
				e.preventDefault();
				setIndicateDrop(true);
			}}
			onDragLeave={(e) => {
				e.preventDefault();
				setIndicateDrop(false);
			}}
			onDrop={(e) => {
				e.preventDefault();
				setIndicateDrop(false);
			}}>
			<div className="p-4 border-b  border-gray-300 shadow-sm flex justify-between">
				<h2 className="text-sm uppercase font-semibold  text-wrap break-words">
					{heading}
				</h2>
				<h2 className="text-sm capitalize  ">{count}</h2>
			</div>

			<div className="max-h-[600px] overflow-y-auto p-2.5 scrollbar-custom ">
				{influencers?.map((influencer, influencerIndex) => {
					return (
						<>
							<DropReciever index={[index, influencerIndex]} />
							<InfluencerCard
								key={index}
								influencer={influencer}
								index={[index, influencerIndex]}
								color={color}
							/>
						</>
					);
				})}

				<DropReciever height={64} index={[index, influencers?.length || 0]} />
			</div>
		</div>
	);
};

export default Column;
