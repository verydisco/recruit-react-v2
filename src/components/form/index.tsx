import React from 'react';
import * as styles from './form.module.scss';

export const Form = () => {
	return (
		<div>
			Form
			<form>
				<div>
					<label>Credit card number</label>
					<input type='text' />
				</div>
				<div>
					<label>CVC</label>
					<input type='text' />
				</div>
				<div>
					<label>Expiry</label>
					<input type='text' />
				</div>
				<div>
					<input type='submit' value='submit' />
				</div>
			</form>
		</div>
	);
};
