import React from 'react'
import { StartPage } from '../../ui/templates/StartPage'
import logo from './StartGame.png'

export const start = () => (
  <StartPage 
    logo={logo}
    title='MEMORY GAME'
    name='Начать игру'
  />
)