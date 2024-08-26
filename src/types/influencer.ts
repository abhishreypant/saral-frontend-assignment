interface Influencer {
	name: string;
	username: string;
	followerCount?: number;
	estimatedPromotionPrice?: number;
	platform: "Instagram" | "TikTok" | "YouTube";
	image?: string;
	profileLink?: string;
	notifications?: number;
}

// interface InfluencerData extends Influencer {
// 	column:
// 		| "Prospects"
// 		| "Reached Out"
// 		| "In Conversation"
// 		| "Rejected"
// 		| "Onboarded";
// }

export default Influencer;
