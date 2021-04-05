import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Beer } from '../../pages'
import {
  CardWrapper,
  ContentsWrapper,
  DetailsWrapper,
  ImageWrapper,
  Tagline,
} from './styles'

interface Props {
  beer: Beer
}

const BeerCard: React.FC<Props> = ({ beer }: Props) => {
  return (
    <CardWrapper>
      <Link href={`beer/${beer.id}`}>
        <a>
          <ContentsWrapper>
            <ImageWrapper>
              <Image src={beer.image_url} height={150} width={50} />
            </ImageWrapper>
            <DetailsWrapper>
              <h3>{beer.name}</h3>
              <Tagline>{beer.tagline}</Tagline>
            </DetailsWrapper>
          </ContentsWrapper>
        </a>
      </Link>
    </CardWrapper>
  )
}

export default BeerCard
