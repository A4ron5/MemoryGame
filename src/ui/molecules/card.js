import styled from 'styled-components'
import {CardFront} from '../atoms/CardFront'
import {CardBack} from '../atoms/CardBack'

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
  &[data-position='0'] {
    right: 0;
  };
  &[data-position='1'] {
    right: 240px;
  };
  &[data-position='2'] {
    right: 480px;
  };
  &[data-position='3'] {
    right: 720px;
  };
  &[data-position='4'] {
    right: 960px;
  };
  &[data-position='5'] {
    right: 1200px;
  };
  &[data-position='6'] {
    top: 300px;
    right: 0;
  };
  &[data-position='7'] {
    top: 300px;
    right: 240px;
  };
  &[data-position='8'] {
    top: 300px;
    right: 480px;
  };
  &[data-position='9'] {
    top: 300px;
    right: 720px;
  };
  &[data-position='10'] {
    top: 300px;
    right: 960px;
  };
  &[data-position='11'] {
    top: 300px;
    right: 1200px;
  };
  &[data-position='12'] {
    top: 600px;
    right: 0px;
  };
  &[data-position='13'] {
    top: 600px;
    right: 240px;
  };
  &[data-position='14'] {
    top: 600px;
    right: 480px;
  };
  &[data-position='15'] {
    top: 600px;
    right: 720px;
  };
  &[data-position='16'] {
    top: 600px;
    right: 960px;
  };
  &[data-position='17'] {
    top: 600px;
    right: 1200px;
  };
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
