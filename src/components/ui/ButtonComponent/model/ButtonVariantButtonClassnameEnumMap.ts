import { ButtonClassNameEnum, ButtonVariant } from './ButtonComponent.const';

export const BUTTON_VARIANT_BUTTON_CLASSNAME_ENUM_MAP: Record<
	ButtonVariant,
	ButtonClassNameEnum
> = {
	[ButtonVariant.Primary]: ButtonClassNameEnum.Primary,
	[ButtonVariant.Secondary]: ButtonClassNameEnum.Secondary,
	[ButtonVariant.Alternate]: ButtonClassNameEnum.Alternate,
	[ButtonVariant.Link]: ButtonClassNameEnum.Link,
	[ButtonVariant.LinkSecondary]: ButtonClassNameEnum.LinkSecondary,
	[ButtonVariant.SecondarySelectable]:
		ButtonClassNameEnum.SecondarySelectable,
	[ButtonVariant.FileUpload]: ButtonClassNameEnum.FileUpload,
};
