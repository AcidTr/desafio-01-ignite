import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import trash from '../assets/trash.svg';
import trashHover from '../assets/trash-hover.svg';

import styles from './Task.module.css';

export type TaskType = {
	id: string;
	isCompleted: boolean;
	taskContent: string;
};

interface TaskProps {
	task: TaskType;
	updateTask: (task: TaskType) => void;
	deleteTask: (task: TaskType) => void;
}

export function Task({ task, updateTask, deleteTask }: TaskProps) {
	const [trashSvgURL, setTrashSvgURL] = useState(trash);

	return (
		<div className={styles.taskContainer}>
			<div className={styles.inputContainer}>
				<p
					style={{
						textDecorationLine: task.isCompleted ? 'line-through' : 'none',
						color: task.isCompleted ? '#808080' : '#f2f2f2',
					}}
				>
					<Checkbox
						checked={task.isCompleted}
						onChange={() =>
							updateTask({ ...task, isCompleted: !task.isCompleted })
						}
						sx={{
							color: '#4EA8DE',
							'&.Mui-checked': {
								color: '#5E60CE ',
							},
						}}
					/>
					{task.taskContent}
				</p>
			</div>
			<div
				className={styles.trashContainer}
				onMouseEnter={() => setTrashSvgURL(trashHover)}
				onMouseLeave={() => setTrashSvgURL(trash)}
				onClick={() => deleteTask(task)}
			>
				<img
					src={trashSvgURL}
					alt='apagar task'
				/>
			</div>
		</div>
	);
}
