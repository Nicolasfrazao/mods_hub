import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Error = () => {
  return (
    <div>
      <p>A error has ocurred</p>
      <Image
        src='/error.jpg'
        alt="Error image"
        width={ 500 }
        height={ 375 }
      >
        <p>Error</p>
      </Image>
      <Button
        onClick={() => window.location.reload()}
      >
        Click to reload the page
      </Button>
    </div>
  )
}

export default Error
