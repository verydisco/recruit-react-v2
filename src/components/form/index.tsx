import React from 'react';
import * as styles from './form.module.scss';

export const Form = () => {
	return (
		<form action='post' className={styles.form}>
			<div className={styles.formRow}>
				<label htmlFor='customerCreditCardNo' className={styles.formLabel}>
					Credit Card Number
				</label>
				<input
					id='customerCreditCardNo'
					name='customerCreditCardNo'
					className={styles.formInput}
					type='text'
				/>
			</div>
			<div className={` ${styles.formRow} ${styles.formRowThirds}`}>
				<div className={styles.inputThirdMed}>
					<label htmlFor='customerCreditCardCVC' className={styles.formLabel}>
						CVC
					</label>
					<input
						id='customerCreditCardCVC'
						name='customerCreditCardCVC'
						className={styles.formInput}
						type='text'
					/>
				</div>
				<div className={styles.inputThirdMed}>
					<label
						htmlFor='customerCreditCardExpiry'
						className={styles.formLabel}
					>
						Expiry Date (MM/YY)
					</label>
					<input
						id='customerCreditCardExpiry'
						name='customerCreditCardExpiry'
						className={styles.formInput}
						type='text'
					/>
				</div>
			</div>

			<div className={styles.formRow}>
				<input className={styles.formSubmit} type='submit' value='Submit' />
			</div>
		</form>
	);
};
