import React, { useState, FC } from 'react';
import './normalize.module.scss';
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
			<div className={styles.pageWrapper}>
				<Header onStatusChange={handleStatusChange} />
				<div id='main' className={styles.main}>
					<Intro />
					<Form />
				</div>
			</div>
		</>
	);
};
