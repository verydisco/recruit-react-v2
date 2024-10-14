import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';

describe('Register card title', () => {
	it('should be present', () => {
		render(<App />);
		const heading = screen.queryByRole('heading', {
			level: 1,
		});

		expect(heading).toBeInTheDocument();
		expect(heading).toContainHTML('Register card form');
	});
});
