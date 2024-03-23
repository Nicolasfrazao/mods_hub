import React from 'react'
import { Button } from './ui/button'

const Error = () => {
  return (
    <div>
      <p>A error has ocurred</p>
      <Button
        onClick={() => window.location.reload()}
      >
        Click to reload the page
      </Button>
    </div>
  )
}

export default Error
