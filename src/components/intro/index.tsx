import React from 'react';
import * as styles from './intro.module.scss';

export const Intro = () => {
	const username = { FirstName: 'John', LastName: 'Smith' };
	return (
		<div className={styles.intro}>
			<p>Welcome {username.FirstName}</p>
		</div>
	);
};
