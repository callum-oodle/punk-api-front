import React from 'react'

interface Props {
  food_pairing: [string]
}

const FoodPairing: React.FC<Props> = ({ food_pairing }: Props) => {
  return (
    <>
      <h3>Why not try with:</h3>
      {food_pairing.map((pairing) => (
        <div key={pairing}>{pairing}</div>
      ))}
    </>
  )
}

export default FoodPairing
