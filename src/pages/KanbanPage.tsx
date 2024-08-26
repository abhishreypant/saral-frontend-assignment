import Board from "../components/kanban/Board";
import Column from "../components/kanban/Column";
import TopBar from "../components/kanban/TopBar";
import { useKanbanStore } from "../stores/kanban";

const KanbanPage = () => {
	const { columns } = useKanbanStore();
	return (
		<div className="p-2.5  flex flex-col gap-2.5 min-h-screen w-full bg-gray-100">
			<TopBar data-testid="topbar" />
			<Board data-testid="Board">
				{columns.map((column, index) => (
					<Column
						key={index}
						index={index}
						color={column.color}
						heading={column.heading}
						influencers={column.influencers}
					/>
				))}
			</Board>
		</div>
	);
};

export default KanbanPage;
