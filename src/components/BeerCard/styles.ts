import styled from 'styled-components'

export const CardWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  text-decoration: none;
  border: 1px solid #eaeaea;
  width: 350px;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    color: #0070f3;
    border-color: #0070f3;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const ContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const Tagline = styled.div`
  line-height: 1.5;
  font-size: 1rem;
`

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`
