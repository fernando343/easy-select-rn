import React from 'react'
import { Chip } from 'react-native-paper'

interface Props{
  text: string
}

export const Item: React.FC<Props> = ({ text }) => {
  return (
    <Chip style={{ borderRadius: 20 }}>
      {text}
    </Chip>
  )
}
