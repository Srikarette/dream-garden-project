import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../services/utils/colors';
import CustomText, { typeTextType } from '../../components/texts/CustomText';
import { useNavigate } from 'react-router-dom';
import urls from '../../services/utils/urls';

const HomeScreen = ({ className }: { className?: string }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleStartButton = () => {
    navigate(urls.Quiz);
  };

  return (
    <div className={className}>
      <div className="info-box">
        <div className="header">
          <div
            className={`home-logo ${isExpanded ? 'expanded' : 'collapsed'}`}
            onClick={handleLogoClick}
          >
            <CustomText textType={typeTextType.BODY_XS}>Logo Here</CustomText>
          </div>
          <CustomText textType={typeTextType.HEADLINE_1}>Project Title</CustomText>
        </div>
        <div className="sub-header">
          <CustomText textType={typeTextType.SUBTITLE_L}>Explain your idea here</CustomText>
          <CustomText textType={typeTextType.SUBTITLE_L}>[Personal Quiz]</CustomText>
        </div>
      </div>
      <div className="buttom-header">
        <button className="button-style" onClick={handleStartButton}>
          <CustomText textType={typeTextType.HEADLINE_2} style={{ color: colors.white }}>
            Start
          </CustomText>
        </button>
        <div className="info-buttom">
          <CustomText textType={typeTextType.SUBTITLE_S}>Explain More Information</CustomText>
          <CustomText textType={typeTextType.SUBTITLE_S}>[Thank you for your time]</CustomText>
        </div>
      </div>
    </div>
  );
};

export default styled(HomeScreen)`
  background-color: ${colors.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.Blue400};
  padding-right: 24px;
  padding-left: 24px;
  cursor: default;

  .info-box {
    display: flex;
    flex-direction: column;
    gap: 10em;
    width: 100%;
    max-width: 1200px; /* Ensure the content is constrained in larger screens */
    padding: 0 20px;
  }

  .header {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center; /* Center the header content */
  }

  .sub-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 50%;
  }

  .home-logo {
    background-color: ${colors.BlackGrayWhiteGrey700};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer; /* Make it clear it's clickable */
    transition:
      width 0.3s ease,
      height 0.3s ease; /* Smooth transition */

    &.expanded {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }

    &.collapsed {
      width: 120px;
      height: 260px;
    }
  }

  .buttom-header {
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .button-style {
    width: 110px;
    height: 60px;
    border-radius: 16px;
    background-color: ${colors.Green500};
    border: 0;
    cursor: pointer;
  }

  .info-buttom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  /* Responsive Styling */
  @media (max-width: 768px) {
    .info-box {
      gap: 5em;
    }

    .home-logo {
      width: 50px;
      height: 50px;
    }

    .header {
      gap: 4px;
    }

    .sub-header {
      font-size: 16px;
    }

    .button-style {
      width: 100px;
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    .info-box {
      gap: 4em;
      padding: 0 10px;
    }

    .home-logo {
      width: 40px;
      height: 40px;
    }

    .header {
      gap: 4px;
    }

    .sub-header {
      font-size: 14px;
    }

    .button-style {
      width: 90px;
      height: 45px;
    }
  }
`;
