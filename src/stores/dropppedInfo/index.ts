import { create } from "zustand";
import Influencer from "../../types/influencer";

interface DroppedInfoState {
	droppedIndex: [number, number];
	droppedInfluencer?: Influencer;
	isDropped: boolean;
	setDroppedIndex: (index: [number, number]) => void;
	setDroppedInfluencer: (influencer: Influencer) => void;
	setIsDropped: (isDropped: boolean) => void;
}

const useDroppedStore = create<DroppedInfoState>((set) => ({
	droppedIndex: [0, 0],
	droppedInfluencer: undefined,
	isDropped: true,
	setDroppedIndex: (index) => set({ droppedIndex: index }),
	setDroppedInfluencer: (influencer) => set({ droppedInfluencer: influencer }),
	setIsDropped: (isDropped) => set({ isDropped }),
}));

export default useDroppedStore;
