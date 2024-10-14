import React, { useState } from 'react';
import * as styles from './header.module.scss';
import { NavOverlay } from '../navOverlay';

export const Header = ({ onStatusChange }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleStatus = () => {
		const newStatus = !isOpen;
		setIsOpen(newStatus);
		onStatusChange(newStatus);
	};

	const headerTitle = { pageTitle: 'Register card form' };
	return (
		<div className={styles.headerWrapper}>
			<div className={styles.menuToggle}>
				<a
					href='#'
					role='menubutton'
					aria-label={isOpen ? 'close main menu' : 'open main menu'}
					aria-expanded={isOpen ? 'true' : 'false'}
					onClick={toggleStatus}
					className={`${styles.menuLink}  ${
						isOpen ? `${styles.menuOpen}` : ''
					}`}
				>
					<i className={styles.hamburger} aria-hidden='true'></i>
				</a>
			</div>
			{isOpen && <NavOverlay />}
			<header>
				<h1 className={styles.headerTitle}>{headerTitle.pageTitle}</h1>
			</header>
		</div>
	);
};
