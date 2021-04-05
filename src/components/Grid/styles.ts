import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  max-width: 80%;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`
