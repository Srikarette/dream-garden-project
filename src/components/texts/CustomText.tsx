import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import fonts from '../../services/utils/fonts';
import colors from '../../services/utils/colors';

export enum typeTextType {
  HEADLINE_1 = 'HEADLINE_1',
  HEADLINE_2 = 'HEADLINE_2',
  HEADLINE_3 = 'HEADLINE_3',
  HEADLINE_4 = 'HEADLINE_4',
  SUBTITLE_L = 'SUBTITLE_L',
  SUBTITLE_M = 'SUBTITLE_M',
  SUBTITLE_S = 'SUBTITLE_S',
  SUBTITLE_XS = 'SUBTITLE_XS',
  BODY_L = 'BODY_L',
  BODY_M = 'BODY_M',
  BODY_S = 'BODY_S',
  BODY_XS = 'BODY_XS',
  BUTTON_L = 'BUTTON_L',
  BUTTON_M = 'BUTTON_M',
  BUTTON_S = 'BUTTON_S',
  BUTTON_XS = 'BUTTON_XS',
  TextHyperLink = 'TextHyperLink',
  TextHyperLink_Without_Underline = 'TextHyperLink_Without_Underline',
}

interface CustomTextProps {
  children: React.ReactNode;
  textType: typeTextType;
  testID?: string;
  style?: React.CSSProperties;
  customAttributes?: React.HTMLAttributes<HTMLSpanElement>;
  isDisabled?: boolean;
  isNestedText?: boolean;
  onClick?: () => void;
}

const textStyles = {
  HEADLINE_1: css`
    font-family: ${fonts.AnuphanSemiBold};
    font-size: 48px;
    line-height: 42px;
    font-weight: 600;
    color: ${colors.black};
  `,
  HEADLINE_2: css`
    font-family: ${fonts.AnuphanSemiBold};
    font-size: 32px;
    line-height: 31px;
    font-weight: 600;
    color: ${colors.black};
  `,
  HEADLINE_3: css`
    font-family: ${fonts.AnuphanSemiBold};
    font-size: 26px;
    line-height: 26px;
    font-weight: 600;
    color: ${colors.black};
  `,
  HEADLINE_4: css`
    font-family: ${fonts.AnuphanSemiBold};
    font-size: 20px;
    line-height: 21px;
    font-weight: 600;
    color: ${colors.black};
  `,
  SUBTITLE_L: css`
    font-family: ${fonts.AnuphanMedium};
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    color: ${colors.black};
  `,
  SUBTITLE_M: css`
    font-family: ${fonts.AnuphanMedium};
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    color: ${colors.black};
  `,
  SUBTITLE_S: css`
    font-family: ${fonts.AnuphanMedium};
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    color: ${colors.black};
  `,
  SUBTITLE_XS: css`
    font-family: ${fonts.AnuphanMedium};
    font-size: 10px;
    line-height: 16px;
    font-weight: 500;
    color: ${colors.black};
  `,
  BODY_L: css`
    font-family: ${fonts.AnuphanRegular};
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    color: ${colors.black};
  `,
  BODY_M: css`
    font-family: ${fonts.AnuphanRegular};
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    color: ${colors.black};
  `,
  BODY_S: css`
    font-family: ${fonts.AnuphanRegular};
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: ${colors.black};
  `,
  BODY_XS: css`
    font-family: ${fonts.AnuphanRegular};
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: ${colors.black};
  `,
  BUTTON_L: css`
    font-family: ${fonts.AnuphanMedium};
    font-size: 18px;
    line-height: 23px;
    font-weight: 500;
    color: ${colors.black};
  `,
  BUTTON_M: css`
    font-family: ${fonts.AnuphanMedium};
    font-size: 16px;
    line-height: 21px;
    font-weight: 500;
    color: ${colors.black};
  `,
  BUTTON_S: css`
    font-family: ${fonts.AnuphanMedium};
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    color: ${colors.black};
  `,
  BUTTON_XS: css`
    font-family: ${fonts.AnuphanMedium};
    font-size: 16px;
    line-height: 21px;
    font-weight: 500;
    color: ${colors.black};
  `,
  TextHyperLink: css`
    font-family: ${fonts.AnuphanMedium};
    font-size: 16px;
    line-height: 21px;
    font-weight: 500;
    color: ${colors.secondaryBlueRibbon};
    text-decoration: underline;
  `,
  TextHyperLink_Without_Underline: css`
    font-family: ${fonts.AnuphanMedium};
    font-size: 16px;
    line-height: 21px;
    font-weight: 500;
    color: ${colors.secondaryBlueRibbon};
  `,
};

const StyledText = styled.span<{ textType: typeTextType }>`
  ${({ textType }) => textStyles[textType] || textStyles.BODY_M}
`;

const CustomText: FC<CustomTextProps> = ({
  children,
  textType,
  style,
  testID,
  customAttributes,
  onClick,
}) => (
  <StyledText
    textType={textType}
    style={style}
    data-testid={testID}
    {...customAttributes}
    onClick={onClick}
  >
    {children}
  </StyledText>
);

export default CustomText;
