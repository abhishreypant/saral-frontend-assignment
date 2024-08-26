import { create } from "zustand";
import { DEFAULT_INFLUENCERS } from "../../data";
import Influencer from "../../types/influencer";

type Column = {
	color: string;
	heading: string;
	influencers: Influencer[];
};

type KanbanStore = {
	columns: Column[];
	addInfluencer: (
		index: [number, number],
		influencer: Influencer | null
	) => void;
	removeInfluencer: (username: string) => void;
	pushInfluencer: (columnIndex: number, influencer: Influencer | null) => void; // Adjusted to handle null
};

export const useKanbanStore = create<KanbanStore>((set) => ({
	columns: DEFAULT_INFLUENCERS,
	addInfluencer: (
		[columnIndex, influencerIndex]: [number, number],
		influencer: Influencer | null
	) => {
		if (!influencer) {
			alert("Cannot add null influencer");
			return; // Exit if influencer is null
		}
		set((state) => {
			const column = state.columns[columnIndex];
			if (column.influencers.some((i) => i.username === influencer.username)) {
				alert("Username already exists");
				return state; // Return the state unchanged
			}
			return {
				columns: state.columns.map((col, index) =>
					index === columnIndex
						? {
								...col,
								influencers: [
									...col.influencers.slice(0, influencerIndex),
									influencer,
									...col.influencers.slice(influencerIndex),
								],
						  }
						: col
				),
			};
		});
	},
	removeInfluencer: (username: string) =>
		set((state) => ({
			columns: state.columns.map((column) => ({
				...column,
				influencers: column.influencers.filter(
					(influencer) => influencer.username !== username
				),
			})),
		})),
	pushInfluencer: (columnIndex: number, influencer: Influencer | null) => {
		if (!influencer) {
			alert("Cannot add null influencer");
			return; // Exit if influencer is null
		}
		set((state) => {
			const column = state.columns[columnIndex];
			if (column.influencers.some((i) => i.username === influencer.username)) {
				alert("Username already exists");
				return state; // Return the state unchanged
			}
			return {
				columns: state.columns.map((col, index) =>
					index === columnIndex
						? {
								...col,
								influencers: [...col.influencers, influencer],
						  }
						: col
				),
			};
		});
	},
}));
