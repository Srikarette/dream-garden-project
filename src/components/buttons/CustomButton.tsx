import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../../services/utils/colors';
import CustomText, { typeTextType } from '../texts/CustomText';

export enum typeButtonType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}

export enum typeButtonSize {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

interface CustomButtonProps {
  testID?: string;
  buttonType: typeButtonType;
  buttonSize: typeButtonSize;
  onClick?: () => void;
  title?: string;
  buttonStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  iconBefore?: string;
  iconAfter?: string;
  iconNodeBefore?: React.ReactNode;
  iconNodeAfter?: React.ReactNode;
  iconStyle?: React.CSSProperties;
  isDisabled?: boolean;
  isDisableShadow?: boolean;
  textType?: typeTextType;
}

const buttonSizeStyles = {
  LARGE: css`
    width: 120px;
    height: 52px;
    padding: 0 24px;
    border-radius: 12px;
  `,
  MEDIUM: css`
    width: 98px;
    height: 48px;
    padding: 0 24px;
    border-radius: 8px;
  `,
  SMALL: css`
    width: 76px;
    height: 32px;
    padding: 0 16px;
    border-radius: 8px;
  `,
};

const ButtonContainer = styled.button<{
  buttonType: typeButtonType;
  buttonSize: typeButtonSize;
  isDisabled: boolean;
  isDisableShadow: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};

  ${({ buttonType }) => {
    switch (buttonType) {
      case typeButtonType.PRIMARY:
        return css`
          background-color: ${colors.primary};
          color: ${colors.white};
        `;
      case typeButtonType.SECONDARY:
        return css`
          background-color: ${colors.white};
          color: ${colors.secondaryBlueRibbon};
          border: 2px solid ${colors.secondaryBlueRibbon};
        `;
      case typeButtonType.TERTIARY:
        return css`
          background-color: transparent;
          color: ${colors.secondaryBlueRibbon};
        `;
      default:
        return css`
          background-color: ${colors.primary};
          color: ${colors.white};
        `;
    }
  }}

  ${({ buttonSize }) => buttonSizeStyles[buttonSize] || buttonSizeStyles.LARGE}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: ${colors.Bluelight200};
      pointer-events: none;
    `}

  ${({ isDisableShadow }) =>
    !isDisableShadow &&
    css`
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    `}
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonType,
  buttonSize,
  title,
  onClick,
  buttonStyle,
  textStyle,
  iconBefore,
  iconAfter,
  iconNodeBefore,
  iconNodeAfter,
  iconStyle,
  isDisabled = false,
  isDisableShadow = false,
  testID,
  textType,
}) => (
  <ButtonContainer
    buttonType={buttonType}
    buttonSize={buttonSize}
    isDisabled={isDisabled}
    isDisableShadow={isDisableShadow}
    onClick={onClick}
    style={buttonStyle}
    data-testid={testID}
  >
    {iconBefore && <Icon src={iconBefore} style={iconStyle} />}
    {iconNodeBefore && iconNodeBefore}
    {title && (
      <CustomText
        style={textStyle}
        textType={
          buttonSize === typeButtonSize.LARGE
            ? typeTextType.BUTTON_L
            : buttonSize === typeButtonSize.MEDIUM
              ? typeTextType.BUTTON_M
              : textType || typeTextType.BUTTON_S
        }
      >
        {title}
      </CustomText>
    )}
    {iconAfter && <Icon src={iconAfter} style={iconStyle} />}
    {iconNodeAfter && iconNodeAfter}
  </ButtonContainer>
);

export default CustomButton;
