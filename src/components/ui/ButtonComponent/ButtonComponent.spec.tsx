import { render } from '@testing-library/react';

import ButtonComponent, { BUTTON_COMPONENT_TESTID, ButtonVariant } from '.';
import { BUTTON_SPINNER_COMPONENT_TESTID } from './model/ButtonComponent.testid';

describe('ButtonComponent', () => {
	it('expect the button to load', () => {
		// Arrange
		// Act
		const { getByTestId } = render(
			<ButtonComponent variant={ButtonVariant.Primary} />,
		);
		// Assert
		expect(getByTestId(BUTTON_COMPONENT_TESTID)).toBeInTheDocument();
	});
	it('expect to have size className', () => {
		// Act
		const { container } = render(
			<ButtonComponent
				size="test-size"
				variant={ButtonVariant.Primary}
			/>,
		);
		// Assert
		expect(
			// classList exists on the child node - ts doesn't like
			// eslint-disable-next-line
			// @ts-expect-error
			container.firstChild.classList.contains('dk-btn--test-size'),
		).toBe(true);
	});
	it('expect to have a classname', () => {
		// Arrange
		// Act
		const { container } = render(
			<ButtonComponent
				className="test-classname"
				variant={ButtonVariant.Primary}
			/>,
		);
		// Assert
		expect(
			// classList exists on the child node - ts doesn't like
			// eslint-disable-next-line
			// @ts-expect-error
			container.firstChild.classList.contains('test-classname'),
		).toBe(true);
	});
	it('expect to have spinner', () => {
		// Act
		const { getByTestId } = render(
			<ButtonComponent isLoading variant={ButtonVariant.Primary} />,
		);
		// Assert
		expect(
			getByTestId(BUTTON_SPINNER_COMPONENT_TESTID),
		).toBeInTheDocument();
	});
});
