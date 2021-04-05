import React from 'react'
import LayoutContainer from '../components/LayoutContainer'
import { GetStaticProps } from 'next'
import BeerCard from '../components/BeerCard'
import { CardGrid } from '../components/CardGrid/styles'

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.punkapi.com/v2/beers')
  const data = await res.json()
  return {
    props: {
      beers: data,
    },
  }
}

interface Props {
  beers: [beer: Beer]
}

export interface Beer {
  id: number
  name: string
  image_url: string
  abv: number
  tagline: string
  description: string
  food_pairing: [string]
}

const Home: React.FC<Props> = ({ beers }: Props) => {
  return (
    <>
      <LayoutContainer>
        <CardGrid>
          {beers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </CardGrid>
      </LayoutContainer>
    </>
  )
}

export default Home
