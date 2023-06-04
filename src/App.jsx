import styled from 'styled-components';
import Costumers from './views/Costumers';
import './App.css';

// The row container component
export const StyledContainer = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1% 0 1%;
  max-width: 1920px;
`;

function App() {
  return (
    <div className="costumers-page">

      <div style={{ paddingBlock: '25px' }}></div>
      <StyledContainer>
        <Costumers/>
      </StyledContainer>
    </div>
  );
}

export default App;
