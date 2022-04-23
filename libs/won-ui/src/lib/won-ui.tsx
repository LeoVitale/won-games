import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WonUiProps {}

const StyledWonUi = styled.div`
  color: pink;
`;

export function WonUi(props: WonUiProps) {
  return (
    <StyledWonUi>
      <h1>Welcome to WonUi!</h1>
    </StyledWonUi>
  );
}

export default WonUi;
