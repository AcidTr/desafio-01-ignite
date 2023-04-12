import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { Task, TaskType } from './components/Task';

import './global.css';
import styles from './App.module.css';

import noTask from './assets/no-task.svg';

function App() {
	const [tasks, setTasks] = useState<TaskType[]>([]);

	function createNewTask(taskContent: string) {
		setTasks((oldTasks) => {
			return [...oldTasks, { id: uuidv4(), isCompleted: false, taskContent }];
		});
	}

	function updateTask(task: TaskType) {
		setTasks((oldTasks) => {
			return oldTasks.map((oldTask) => {
				if (oldTask.id === task.id) {
					return task;
				}
				return oldTask;
			});
		});
	}

	function deleteTask(task: TaskType) {
		setTasks((oldTasks) => {
			return oldTasks.filter((oldTask) => oldTask.id !== task.id);
		});
	}

	const completedTasksCounter = useMemo(() => {
		return tasks.reduce((acc, task) => {
			return acc + +task.isCompleted;
		}, 0);
	}, [tasks]);

	return (
		<>
			<Header />
			<main className={styles.main}>
				<TodoForm createNewTask={createNewTask} />
				<div className={styles.tasksStatusContainer}>
					<strong>
						Tarefas criadas <label>{tasks.length}</label>
					</strong>
					<strong>
						Concluídas{' '}
						<label>
							{tasks.length > 0
								? `${completedTasksCounter} de ${tasks.length}`
								: 0}
						</label>
					</strong>
				</div>
				<div className={styles.tasksContainer}>
					{tasks.length === 0 && (
						<>
							<img
								src={noTask}
								alt='No tasks created'
							/>
							<strong>Você ainda não tem tarefas cadastradas</strong>
							<p>Crie tarefas e organize seus itens a fazer</p>
						</>
					)}
					{tasks.length > 0 && (
						<>
							{tasks.map((task) => (
								<Task
									task={task}
									updateTask={updateTask}
									deleteTask={deleteTask}
									key={task.id}
								/>
							))}
						</>
					)}
				</div>
			</main>
		</>
	);
}

export default App;
