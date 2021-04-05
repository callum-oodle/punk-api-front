import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LayoutContainer from '../components/LayoutContainer'

const NotFound: React.FC = () => {
  return (
    <LayoutContainer>
      <Image src={'/drunkmonkey.jpeg'} height={300} width={300} />
      <h1>Ooops, something went wrong</h1>
      <Link href="/">
        <a>
          <div>Return to home page</div>
        </a>
      </Link>
    </LayoutContainer>
  )
}

export default NotFound
