import React from 'react'
import LayoutContainer from '../../components/LayoutContainer'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Beer } from '../index'
import BeerShowcase from '../../components/BeerShowcase'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api.punkapi.com/v2/beers')
  const data = await res.json()

  const paths = data.map((beer) => ({ params: { id: beer.id.toString() } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
  const data = await res.json()
  return {
    props: {
      beer: data[0],
    },
  }
}

interface Props {
  beer: Beer
}

const BeerPage: React.FC<Props> = ({ beer }: Props) => {
  return (
    <LayoutContainer>
      <BeerShowcase beer={beer} />
    </LayoutContainer>
  )
}

export default BeerPage
