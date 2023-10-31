import { render } from '@testing-library/react';
import Marketplace from './Marketplace';
import MARKETPLACE_TESTID from './model/Marketplace.testid';

describe('Marketplace', () => {
	describe('initial state', () => {
		it('expect component to load', () => {
			// Arrange
			// Act
			const { getByTestId } = render(<Marketplace />);
			// Assert
			expect(getByTestId(MARKETPLACE_TESTID)).toBeInTheDocument();
		});
	});
});
