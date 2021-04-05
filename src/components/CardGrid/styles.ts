import styled from 'styled-components'

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 80%;
  margin-top: 3rem;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
