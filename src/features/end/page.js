import React from 'react'
import { EndPage } from '../../ui/templates/EndPage'
import logo from './EndGame.png'

export const end = () => (
  <EndPage 
    logo={logo}
    text='Congrats'
    name='Еще раз'
  />
)