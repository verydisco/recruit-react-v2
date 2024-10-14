import React from 'react';
import * as styles from './navOverlay.module.scss';

const menuData = { title: 'Menu', copy: 'This is menu content' };

export const NavOverlay = () => {
	return (
		<div className={styles.overlay}>
			<div className={styles.overlayContent}>
				<h1 role='menuHeading' className={styles.overlayHeading}>
					{menuData.title}
				</h1>
				<div className={styles.overlayCopyWrapper}>
					<div className={styles.overlayCopy}>
						<p>{menuData.copy}</p>
						<nav>
							<ul>
								<li>
									<a href='' title=''>
										First link
									</a>
								</li>
								<li>
									<a href='' title=''>
										Second link
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};
