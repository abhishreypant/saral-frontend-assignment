import { motion } from "framer-motion";

const ComeUp = ({
	children,
	delay = 0,
}: {
	children: React.ReactNode;
	delay?: number;
}) => {
	return (
		<motion.div
			initial={{ filter: "blur(2px)", y: 12 }}
			animate={{ filter: "blur(0)", y: 0 }}
			transition={{ duration: 0.6, delay: delay, ease: "easeIn" }}>
			{children}
		</motion.div>
	);
};

export default ComeUp;
