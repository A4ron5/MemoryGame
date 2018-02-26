import styled from 'styled-components'
import {CardFront, CardBack} from '../atoms'

const CardContainer = styled.div`
  width: 200px;
  height: 260px;
  margin-bottom: 20px;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
  user-select: none;
  ${({ flipped }) => flipped && `
    transform: rotateY(180deg);
  `}
`

const Wrapper = styled.div``;

export const Card = ({ position, id, name, image, flipped, onClick }) => {
  <CardContainer 
    data-position={position} 
    data-id={id} 
    data-name={name} 
    flipped={flipped}
    onClick={onClick}
  >
    <Wrapper>
      <CardFront src={image}/>
      <CardBack/>
    </Wrapper>
  </CardContainer>
}
