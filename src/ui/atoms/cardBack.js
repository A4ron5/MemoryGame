import styled from 'styled-components'

export const CardBack = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 3%;
  background: linear-gradient(-45deg,
  #655197 25%,
  #ffffff 25.1%,
  #ffffff 50%,
  #655197 50.1%,
  #655197 75%,
  #ffffff 75.1%,
  #ffffff 0);
  background-size: 40px 40px;
  transform: rotateY( 180deg );
` 