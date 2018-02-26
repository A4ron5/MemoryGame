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
  transform: ${props => props.flipped || rotateY(180)};
`

const Wrapper = styled.div``;

export const Card = ({position, id, name, image}) => {
  <CardContainer position={position} id={id} name={name}>
    <Wrapper>
      <CardFront src={image}/>
      <CardBack/>
    </Wrapper>
  </CardContainer>
}
