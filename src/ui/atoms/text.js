import styled from 'styled-components'

export const Text = styled.p`
  font-size: 28px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  opacity: 0.85;
  margin-bottom: ${({margin}) => margin && `40px;` }
  user-select: none;
`