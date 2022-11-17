import styled from 'styled-components';

export const StyledLeaderboards = styled.table`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 250px;
  width: 100%;
  border-radius: 20px;
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  color: white;
  border-spacing: 3px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const StyledTHeader = styled.thead`
  padding: 5px;
`;

export const StyledTBody = styled.tbody`
  padding: 5px;
  text-align: center;
`;

export const StyledTCell = styled.td`
  font-size: .8rem;
`;

export const StyledTRow = styled.tr`

`;
