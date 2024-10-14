import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
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

describe('Menu toggle', () => {
	it('should be present', () => {
		render(<App />);
		const header = screen.getByRole('header');
		const menuButton = within(header).queryByRole('button');

		expect(menuButton).toBeInTheDocument();
	});
});

describe('Menu toggle', () => {
	it('by default on click sets aria expand true  ', () => {
		render(<App />);
		const header = screen.getByRole('header');
		const menuButton = within(header).getByRole('button');
		fireEvent.click(menuButton);
		expect(menuButton.getAttribute('aria-expanded')).toBe('true');
	});
});

describe('Menu toggle', () => {
	it('when open and clicked sets aria expand false  ', () => {
		render(<App />);
		const header = screen.getByRole('header');
		const menuButton = within(header).getByRole('button');
		fireEvent.click(menuButton);
		expect(menuButton.getAttribute('aria-expanded')).toBe('true');
		fireEvent.click(menuButton);
		expect(menuButton.getAttribute('aria-expanded')).toBe('false');
	});
});

describe('Menu toggle', () => {
	it('when open page menu heading is readable', () => {
		render(<App />);
		const header = screen.getByRole('header');
		const menuButton = within(header).getByRole('button');
		fireEvent.click(menuButton);
		expect(menuButton.getAttribute('aria-expanded')).toBe('true');
		const menuHeading = screen.getByRole('menuHeading');
		expect(menuHeading).toBeInTheDocument();
		expect(menuHeading).toContainHTML('Menu');
	});
});

describe('Overlay', () => {
	it('when closed does show menu heading  ', () => {
		render(<App />);
		const menuHeading = screen.queryByText('Menu');
		expect(menuHeading).not.toBeInTheDocument();
	});
});
