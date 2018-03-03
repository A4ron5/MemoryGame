import React from 'react'
import styled from 'styled-components'
import { RestartButton } from '../atoms'
import { TextCount } from '../atoms'

const Header = styled.div`
  padding-top: 45px;
  margin-bottom: 20px;
  display: flex;
  color: #fff;
`
export const HeaderView = ({onClick, count}) => (
  <Header>
    <RestartButton onClick={onClick} data-tid="Menu-newGame">
      Начать заного
    </RestartButton>
    <TextCount data-tid="Menu-scores">
      Очки: {count}
    </TextCount>
  </Header>
) 