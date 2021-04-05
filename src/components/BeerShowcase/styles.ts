import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 80%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`

export const Bold = styled.div`
  font-weight: bold;
`

export const ItemWrapper = styled.div`
  display: flex;
  white-space: pre;
  margin-bottom: 1rem;
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleWrapper = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
