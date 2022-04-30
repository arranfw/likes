import styled from 'styled-components';
import { useState } from 'react';

import { Disabled } from './Disabled';
import { Pure } from './Pure';

const StyledBody = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;

const StyledDemoItem = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function App() {
  return (
    <StyledBody>
      <StyledDemoItem>
        Pure:
        <Pure />
      </StyledDemoItem>
      <StyledDemoItem>
        Disabled:
        <Disabled />
      </StyledDemoItem>
    </StyledBody>
  );
}

export default App;
