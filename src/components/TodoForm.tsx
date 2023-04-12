import { FormEvent, useState } from 'react';

import styles from './TodoForm.module.css';

import plusSign from '../assets/plus.svg';

interface TodoFormProps {
	createNewTask(taskContent: string): void;
}

export function TodoForm({ createNewTask }: TodoFormProps) {
	const [newTask, setNewTask] = useState('');

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		createNewTask(newTask);
		setNewTask('');
	}

	return (
		<form
			className={styles.todoForm}
			onSubmit={onSubmit}
		>
			<input
				placeholder='Adicione uma nova tarefa'
				onChange={({ target }) => setNewTask(target.value)}
				value={newTask}
			/>
			<button type='submit'>
				Criar{' '}
				<img
					src={plusSign}
					alt='plus sign'
				/>
			</button>
		</form>
	);
}
