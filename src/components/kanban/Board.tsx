const Board = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className=" md:flex w-full gap-2.5  rounded-md bg-transparent">
			{children}
		</div>
	);
};

export default Board;
