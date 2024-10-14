import React, { FC } from 'react';
import * as styles from './app.module.scss';
import { Header } from './components/header';
import { Intro } from './components/intro';
import { Form } from './components/form';

export const App = () => {
	return (
		<>
			<h1 className={styles.demo}>Welcome to your technical test!</h1>
			<div>
				<Header />
				<Intro />
				<Form />
			</div>
		</>
	);
};
