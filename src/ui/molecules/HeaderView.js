import React from 'react'
import styled from 'styled-components'
import { RestartButton } from '../atoms'
import { TextCount } from '../atoms'

const Header = styled.div`
  margin-top: 45px;
  margin-bottom: 20px;
  display: flex;
  color: #fff;
`
export const HeaderView = ({onClick, count}) => (
  <Header>
    <RestartButton onClick={onClick}>
      Начать заного
    </RestartButton>
    <TextCount>
      Очки: {count}
    </TextCount>
  </Header>
) 