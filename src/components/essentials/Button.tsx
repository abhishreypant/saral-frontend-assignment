import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
	children,
	className = "",
	variant = "primary",
	...props
}) => {
	const baseStyles =
		"h-9 flex items-center gap-2 cursor-pointer transition-all  py-2 px-3 rounded-md hover:scale-105 active:scale-95  font-medium";
	const primaryStyles = "bg-white text-purple-700 ";
	const secondaryStyles = "bg-white text-gray-700 ";

	const styles = `${baseStyles} ${
		variant === "primary" ? primaryStyles : secondaryStyles
	} ${className}`;

	return (
		<button className={styles} {...props}>
			{children}
		</button>
	);
};

export default Button;
