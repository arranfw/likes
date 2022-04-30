import styled, { keyframes } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';

const StyledBody = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;

const StyledLikeButton = styled.button`
  border: 0;
  padding: 0.5rem 1rem;
  height: 40px;
  width: 40px;
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
  z-index: 2;

  svg {
    transition: transform 0.2s cubic-bezier(0.02, 1.5, 0.75, 1.25);
  }
  color: lightcoral;
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
    top: 0;
    opacity: 0;
  }
  10% {
    top: -80%;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
    top: -80%;
  }
  100% {
    top: 0;
    opacity: 0;
  }
`;

const StyledButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  position: relative;
  :after {
    z-index: 1;
    border-radius: 99px;
    content: '';
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    pointer-events: none;
    position: absolute;
    background: lightcoral;
  }
  &.animating:after {
    animation: ${grow} 0.2s linear;
  }
`;

const StyledLikeIndicator = styled.span`
  border-radius: 99px;
  background: lightcoral;
  color: white;
  position: absolute;
  top: 2px;
  padding: 0.25rem 0.5rem;
  &.animating {
    animation: ${rise} 2s cubic-bezier(0, 1.5, 0.95, 0.93);
  }
`;

const StyledLikeIcon = styled(FontAwesomeIcon)`
  color: inherit;
  width: 24x;
  height: 24px;
`;

function App() {
  const [liked, setLiked] = useState(false);
  const [animating, setAnimating] = useState<any>();

  const handleClick = () => {
    setLiked((prev) => !prev);
    setAnimating(false);
    setTimeout(() => setAnimating(true));
  };

  return (
    <StyledBody>
      <StyledButtonContainer className={animating ? 'animating' : ''}>
        <StyledLikeIndicator className={animating ? 'animating' : ''}>
          9
        </StyledLikeIndicator>
        <StyledLikeButton onClick={handleClick}>
          <StyledLikeIcon icon={liked ? faHeart : faHeartOutline} />
        </StyledLikeButton>
      </StyledButtonContainer>
    </StyledBody>
  );
}

export default App;
