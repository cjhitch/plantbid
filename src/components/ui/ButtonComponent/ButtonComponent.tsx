// import { IconVariant } from '@/client/components/IconComponent';
import { Button, CircularProgress, type ButtonProps } from '@mui/material';
import React, { type FC } from 'react';

import {
	BUTTON_COMPONENT_TESTID,
	BUTTON_VARIANT_BUTTON_CLASSNAME_ENUM_MAP,
	type ButtonVariant,
} from '.';
import { BUTTON_SPINNER_COMPONENT_TESTID } from './model/ButtonComponent.testid';

interface Props extends Omit<ButtonProps, 'variant' | 'size'> {
	variant: ButtonVariant;
	// icon?: IconVariant;
	size?: string;
	isLoading?: boolean;
	testId?: string;
	// despite appearing unused - this must stay on for component type override from MUI
	component?: React.ElementType;
}

const ButtonComponent: FC<Props> = ({
	variant,
	children,
	className,
	// icon,
	size,
	isLoading,
	testId,
	...rest
}) => {
	return (
		<Button
			data-testid={testId || BUTTON_COMPONENT_TESTID}
			className={`${BUTTON_VARIANT_BUTTON_CLASSNAME_ENUM_MAP[variant]} ${
				className || ''
			} ${size ? `btn--${size}` : ''} `}
			{...rest}
		>
			{/* {icon && <IconComponent className="mr-1 text-2xl" variant={icon} />} */}
			{isLoading && (
				<CircularProgress
					data-testid={BUTTON_SPINNER_COMPONENT_TESTID}
				/>
			)}
			{!isLoading && children}
		</Button>
	);
};

export default ButtonComponent;
