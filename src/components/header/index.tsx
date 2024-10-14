import React from 'react';
import * as styles from './header.module.scss';
import { NavOverlay } from '../navOverlay';

export const Header = () => {
	return (
		<div>
			<div>Toggle</div>
			<NavOverlay />
			<h1>Register card form</h1>
		</div>
	);
};
