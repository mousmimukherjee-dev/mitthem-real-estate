import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const Provider = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <Header/>
      {children}
      </div>
  )
}

export default Provider