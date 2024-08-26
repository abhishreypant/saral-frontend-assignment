import { Plus, X } from "lucide-react";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Dropdown from "../essentials/DropDown";
import { iconProps } from "../../utils/props";
import Button from "../essentials/Button";

const schema = z.object({
	name: z.string().min(1, "Name is required"),
	username: z.string().min(1, "Username is required"),
	followerCount: z.number().min(0, "Followers count must be a positive number"),
	estimatedPromotionPrice: z
		.number()
		.min(0, "Estimated promotion price must be a positive number"),
	column: z.string().min(1, "Column is required"),
	platform: z.enum(["Instagram", "TikTok", "YouTube"]),
	profileLink: z.string().url("Profile link must be a valid URL").optional(),
});

export type FormData = z.infer<typeof schema>;

const AddCreatorModal = ({
	onAdd,
	onClose,
}: {
	onAdd?: (data: FormData) => void;
	onClose?: () => void;
}) => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			platform: "Instagram",
			column: "Prospects",
		},
	});

	const onSubmit = (data: FormData) => {
		console.log(data);
		if (onAdd) onAdd(data);
	};

	return (
		<motion.div
			className="bg-gray-100 m-8 z-50 border max-w-[720px] w-full h-auto overflow-hidden rounded-md shadow-sm text-sm"
			initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
			animate={{ opacity: 1, y: 0, filter: "none" }}
			transition={{ duration: 0.4 }}>
			<div className="flex items-center border-b bg-gray-200 border-gray-300 justify-between p-3">
				<h2 className="text-xl">Add Creator</h2>
				<div
					className="h-9 w-9 flex items-center justify-center hover:bg-gray-300 rounded-md cursor-pointer"
					onClick={() => {
						if (onClose) onClose();
					}}>
					<X />
				</div>
			</div>
			<div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col p-8 gap-4">
					{Object.keys(errors).length > 0 && (
						<div
							className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
							role="alert">
							<strong className="font-bold">Error!</strong>
							<span className="block sm:inline">
								{" "}
								Please fix the errors below.
							</span>
						</div>
					)}
					<div className="flex gap-4">
						<div className="flex flex-1 flex-col gap-2">
							<label className="text-sm font-normal" htmlFor="name">
								Name
							</label>
							<input
								type="text"
								id="name"
								{...register("name")}
								placeholder="e.g., John Doe"
								className={`py-2 px-3 h-9 border rounded-md ${
									errors.name ? "border-red-500" : ""
								}`}
							/>
							{errors.name && (
								<span className="text-red-500 text-xs">
									{errors.name.message}
								</span>
							)}
						</div>
						<div className="flex flex-1 flex-col gap-2">
							<label className="text-sm font-normal" htmlFor="username">
								Username
							</label>
							<input
								type="text"
								id="username"
								{...register("username")}
								placeholder="e.g., @john_doe"
								className={`py-2 px-3 h-9 border rounded-md ${
									errors.username ? "border-red-500" : ""
								}`}
							/>
							{errors.username && (
								<span className="text-red-500 text-xs">
									{errors.username.message}
								</span>
							)}
						</div>
					</div>
					<div className="flex gap-4">
						<div className="flex flex-1 flex-col gap-2">
							<label className="text-sm font-normal" htmlFor="followerCount">
								Followers Count
							</label>
							<input
								type="number"
								id="followerCount"
								{...register("followerCount", { valueAsNumber: true })}
								placeholder="e.g., 12000"
								className={`py-2 px-3 h-9 border rounded-md ${
									errors.followerCount ? "border-red-500" : ""
								}`}
							/>
							{errors.followerCount && (
								<span className="text-red-500 text-xs">
									{errors.followerCount.message}
								</span>
							)}
						</div>
						<div className="flex flex-1 flex-col gap-2">
							<label
								className="text-sm font-normal"
								htmlFor="estimatedPromotionPrice">
								Estimated Promotion Price
							</label>
							<input
								type="number"
								id="estimatedPromotionPrice"
								{...register("estimatedPromotionPrice", {
									valueAsNumber: true,
								})}
								placeholder="e.g., 500"
								className={`py-2 px-3 h-9 border rounded-md ${
									errors.estimatedPromotionPrice ? "border-red-500" : ""
								}`}
							/>
							{errors.estimatedPromotionPrice && (
								<span className="text-red-500 text-xs">
									{errors.estimatedPromotionPrice.message}
								</span>
							)}
						</div>
					</div>
					<div className="flex gap-4">
						<div className="flex flex-1 flex-col gap-2">
							<label className="text-sm font-normal" htmlFor="column">
								Column
							</label>
							<Controller
								control={control}
								name="column"
								render={({ field }) => (
									<Dropdown
										defaultValue="Prospects"
										options={[
											"Prospects",
											"Reached Out",
											"In Conversation",
											"Onboarded",
											"Rejected",
										]}
										{...field}
									/>
								)}
							/>
							{errors.column && (
								<span className="text-red-500 text-xs">
									{errors.column.message}
								</span>
							)}
						</div>
						<div className="flex flex-1 flex-col gap-2">
							<label className="text-sm font-normal" htmlFor="platform">
								Platform
							</label>
							<Controller
								control={control}
								name="platform"
								render={({ field }) => (
									<Dropdown
										defaultValue="Instagram"
										options={["TikTok", "YouTube", "Instagram"]}
										{...field}
									/>
								)}
							/>
							{errors.platform && (
								<span className="text-red-500 text-xs">
									{errors.platform.message}
								</span>
							)}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-sm font-normal" htmlFor="profileLink">
							Profile Link
						</label>
						<input
							type="text"
							id="profileLink"
							{...register("profileLink")}
							placeholder="e.g., https://instagram.com/johndoe"
							className={`py-2 px-3 h-9 border rounded-md ${
								errors.profileLink ? "border-red-500" : ""
							}`}
						/>
						{errors.profileLink && (
							<span className="text-red-500 text-xs">
								{errors.profileLink.message}
							</span>
						)}
					</div>
					<Button type="submit" className="ml-auto mt-8">
						<Plus {...iconProps} /> Add Creator
					</Button>
				</form>
			</div>
		</motion.div>
	);
};

export default AddCreatorModal;
