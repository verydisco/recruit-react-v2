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
			<div>
				<Header onStatusChange={handleStatusChange} />
				<Intro />
				<Form />
				{overlayStatus ? 'open' : 'closed'}
			</div>
		</>
	);
};
