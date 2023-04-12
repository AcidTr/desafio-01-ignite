import styles from './Header.module.css';

import todoLogo from '../assets/todo-logo.svg';

export function Header() {
	return (
		<header className={styles.header}>
			<img
				src={todoLogo}
				alt='todo logo'
			/>
			<strong>to</strong>
			<strong>do</strong>
		</header>
	);
}
