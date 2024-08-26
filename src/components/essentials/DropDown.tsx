import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { iconProps } from "../../utils/props";

interface DropDownProps {
	defaultValue: string;
	options: string[];
	name?: string;
	onChange?: (
		event: React.ChangeEvent<{ name: string; value: string }>
	) => void;
}

const DropDown = ({ defaultValue, options, name, onChange }: DropDownProps) => {
	const [selected, setSelected] = useState<string>(defaultValue);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleDropdown = () => setIsOpen((prev) => !prev);

	const handleSelect = (option: string) => {
		setSelected(option);
		setIsOpen(false);
		if (onChange) {
			onChange({ target: { name, value: option } } as React.ChangeEvent<{
				name: string;
				value: string;
			}>);
		}
	};

	return (
		<div className="relative inline-block text-left w-48">
			<button
				type="button"
				onClick={toggleDropdown}
				className="w-full px-2 py-2 bg-white border border-purple-600 rounded-md shadow-sm font-medium text-purple-600 hover:bg-gray-50 focus:outline-none focus:ring-2 text-left outline-none focus:ring-gray-300 flex items-center justify-between">
				{selected}
				<ChevronDown {...iconProps} />
			</button>

			{isOpen && (
				<div className="absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu">
						{options.map((option, index) => (
							<button
								type="button"
								key={index}
								onClick={() => handleSelect(option)}
								className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
								{option}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default DropDown;
