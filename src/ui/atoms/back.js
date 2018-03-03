import styled from 'styled-components'

export const CardBack = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 3%;
  transform: rotateY( 180deg );
`