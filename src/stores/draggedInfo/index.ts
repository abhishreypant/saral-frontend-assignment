import { create } from "zustand";
import Influencer from "../../types/influencer";

interface StoreState {
	isDragging: boolean;
	draggedIndex: [number, number];
	draggedInfluencer: Influencer | null;
	setIsDragging: (isDragging: boolean) => void;
	setDraggedIndex: (index: [number, number]) => void;
	setDraggedInfluencer: (influencer: Influencer) => void;
}

export const useDraggedStore = create<StoreState>((set) => ({
	isDragging: false,
	draggedIndex: [0, 0], // Initial value
	draggedInfluencer: null,
	setIsDragging: (isDragging) => set({ isDragging }),
	setDraggedIndex: (index) => set({ draggedIndex: index }),
	setDraggedInfluencer: (influencer) => set({ draggedInfluencer: influencer }),
}));
