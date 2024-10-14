import React, { useState, FC } from 'react';
import * as styles from './app.module.scss';
import { Header } from './components/header';
import { Intro } from './components/intro';
import { Form } from './components/form';

export const App = () => {
	const [overlayStatus, setOverlayStatus] = useState(false);

	const handleStatusChange = (newStatus) => {
		setOverlayStatus(newStatus);
	};
	return (
		<>
			<h1 className={styles.demo}>Welcome to your technical test!</h1>
			<div>
				{overlayStatus ? 'open' : 'closed'}
				<Header onStatusChange={handleStatusChange} />
				<Intro />
				<Form />
			</div>
		</>
	);
};
