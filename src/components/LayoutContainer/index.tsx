import React, { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Main, Wrapper } from './styles'

interface Props {
  children: ReactNode
}

const LayoutContainer: React.FC = ({ children }: Props) => (
  <Wrapper>
    <Nav />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)

export default LayoutContainer
