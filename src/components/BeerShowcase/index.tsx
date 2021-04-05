import React from 'react'
import { Beer } from '../../pages'
import Image from 'next/image'
import {
  ImageWrapper,
  Bold,
  TitleWrapper,
  ItemWrapper,
  DescriptionWrapper,
  Wrapper,
  TextWrapper,
} from './styles'
import FoodPairing from './FoodPairing'

interface Props {
  beer: Beer
}

const BeerShowcase: React.FC<Props> = ({ beer }: Props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={beer.image_url} height={500} width={150} />
      </ImageWrapper>
      <TextWrapper>
        <TitleWrapper>{beer.name}</TitleWrapper>
        <ItemWrapper>
          <Bold>ABV: </Bold> <div>{beer.abv}%</div>
        </ItemWrapper>
        <DescriptionWrapper>{beer.description}</DescriptionWrapper>
        <FoodPairing food_pairing={beer.food_pairing} />
      </TextWrapper>
    </Wrapper>
  )
}

export default BeerShowcase
