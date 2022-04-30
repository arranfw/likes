import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledLikeButton = styled.button`
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.3s cubic-bezier(0.02, 1.5, 0.75, 1.25),
    background-color 0.3s cubic-bezier(0.02, 1.5, 0.75, 1.25),
    color 0.3s cubic-bezier(0.02, 1.5, 0.75, 1.25);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;

  svg {
    transition: transform 0.2s cubic-bezier(0.02, 1.5, 0.75, 1.25);
  }
  color: #ed0b70;
  background-color: aliceblue;
  :hover {
    transform: scale(0.95);
    background-color: lavender;
  }
  :active svg {
    transform: scale(0.7);
  }
`;

const grow = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(3);
    opacity: 0;
  }
`;
const rise = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  33% {
    opacity: 0;
    transform: translateY(50px);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const StyledLikeIndicator = styled.span`
  border-radius: 99px;
  /* background: #ed0b70;
  color: white; */
  background: transparent;
  color: #ed0b70;
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
  line-height: 1.25rem;
  &.animating {
    animation: ${rise} 0.3s ease-in-out;
  }
`;

const StyledLikeIcon = styled(FontAwesomeIcon)`
  color: inherit;
  width: 24x;
  height: 24px;
`;

interface IProps {
  value: any;
  onClick: () => Promise<void>;
  loading: boolean;
  liked: boolean;
}

export const Button: React.FC<IProps> = ({
  value,
  onClick,
  loading,
  liked,
}) => {
  const [animating, setAnimating] = useState<any>();

  const handleAnimations = () => {
    setAnimating(false);
    setTimeout(() => setAnimating(true));
  };

  const handleClick = async () => {
    await onClick();
    handleAnimations();
  };

  return (
    <StyledButtonContainer className={animating ? 'animating' : ''}>
      <StyledLikeButton onClick={handleClick} disabled={loading}>
        <StyledLikeIndicator className={animating ? 'animating' : ''}>
          {value}
        </StyledLikeIndicator>
        <StyledLikeIcon icon={liked ? faHeart : faHeartOutline} />
      </StyledLikeButton>
    </StyledButtonContainer>
  );
};
