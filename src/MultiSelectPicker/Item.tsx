import React from 'react'
import { Chip } from 'react-native-paper'

export const Item = ({ text }) => {
  return (
    <Chip style={{ borderRadius: 20 }}>
      {text}
    </Chip>
  )
}
