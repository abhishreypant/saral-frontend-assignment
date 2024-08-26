import { useRef, useState } from "react";
import { useDraggedStore } from "../../stores/draggedInfo";
import { useKanbanStore } from "../../stores/kanban";
import useDroppedStore from "../../stores/dropppedInfo";

const DropReciever = ({
	height = 2,
	index,
}: {
	height?: number;
	index: [number, number];
}) => {
	const { isDragging, draggedInfluencer } = useDraggedStore();
	const { addInfluencer } = useKanbanStore();
	const [indicateDrop, setIndicateDrop] = useState<boolean>(false);
	const { setIsDropped } = useDroppedStore();
	const { setIsDragging } = useDraggedStore();
	const ref = useRef<HTMLDivElement>(null); // Initialize with null
	return (
		<div
			className={` h-${height} relative border-2 transition-all rounded-lg ${
				indicateDrop
					? "h-[112px] py-2 bg-blue-200 border-blue-400"
					: "border-transparent "
			}`}
			ref={ref && ref}>
			<div
				className={`absolute  z-50 w-full  left-0 bg-transparent top-1/2 -translate-y-1/2 ${
					height < 3 ? (indicateDrop ? "h-40" : "h-16") : "h-full"
				} 
				
				${isDragging ? "pointer-events-auto" : "pointer-events-none"}`}
				onDragEnter={(e) => {
					e.preventDefault();
					setIndicateDrop(true);
					console.log("drag entered");
					console.log(index);
				}}
				onDragLeave={(e) => {
					e.preventDefault();
					setIndicateDrop(false);
					console.log("drag left");
				}}
				onDrop={(e) => {
					e.preventDefault();
					addInfluencer(index, draggedInfluencer);
					console.log("dropped");
					setIsDropped(true);
					setIsDragging(false);
					setIndicateDrop(false);
				}}></div>
		</div>
	);
};

export default DropReciever;
