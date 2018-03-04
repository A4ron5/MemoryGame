import React from 'react'
import styled, { keyframes } from 'styled-components'
import { CardFront } from '../atoms/front'
import { CardBack } from '../atoms/back'
import { connect } from 'react-redux'
import { click } from '../../ac'
import backimg from '../../Initialization/Data/Cards/back.jpg'

const animationTo = keyframes`
  0% { transform: rotateY(0deg) translateY(0px) }
  50% { transform: rotateY(90deg) translateY(-10px) }
  100% { transform: rotateY(180deg) translateY(0px) }
`
const animationFrom = keyframes`
  0% { transform: rotateY(180deg) translateY(0px) }
  50% { transform: rotateY(90deg) translateY(-10px) }
  100% { transform: none translateY(0px) }
`

const CardContainer = styled.div`
  width: 100px;
  height: 135px;
  position: absolute;
  transform-style: preserve-3d;
  user-select: none;
  ${({flipped}) => flipped ? 
  `
    animation: ${animationTo} 0.4s linear;
    transform: rotateY(180deg);
  `
    :
  `
    animation: ${animationFrom} 0.4s linear;
    transform: none;
  `
  }
  &:hover {
    box-shadow: 0 10px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }


  &[data-position='0'] {
    right: 0;
  };
  &[data-position='1'] {
    right: 120px;
  };
  &[data-position='2'] {
    right: 240px;
  };
  &[data-position='3'] {
    right: 360px;
  };
  &[data-position='4'] {
    right: 480px;
  };
  &[data-position='5'] {
    right: 600px;
  };
  &[data-position='6'] {
    top: 150px;
    right: 0;
  };
  &[data-position='7'] {
    top: 150px;
    right: 120px;
  };
  &[data-position='8'] {
    top: 150px;
    right: 240px;
  };
  &[data-position='9'] {
    top: 150px;
    right: 360px;
  };
  &[data-position='10'] {
    top: 150px;
    right: 480px;
  };
  &[data-position='11'] {
    top: 150px;
    right: 600px;
  };
  &[data-position='12'] {
    top: 300px;
    right: 0px;
  };
  &[data-position='13'] {
    top: 300px;
    right: 120px;
  };
  &[data-position='14'] {
    top: 300px;
    right: 240px;
  };
  &[data-position='15'] {
    top: 300px;
    right: 360px;
  };
  &[data-position='16'] {
    top: 300px;
    right: 480px;
  };
  &[data-position='17'] {
    top: 300px;
    right: 600px;
  };
`
export class CardTemp extends React.Component {

  state = {
    flipped: this.props.flipped
  }

  flashok = false;
  
  componentWillReceiveProps(nextProps) {
    this.magic(nextProps)
  }

  magic = (props) => {
    if(this.flashok && props.flipped !== this.state.flipped){
      this.setState({flipped: props.flipped});
      this.flashok = false
      return true;
    }
    this.flashok = true;
  }

  onClick = () => {
    // if(this.props.flag){
    //   this.setState({
    //     flipped: true
    //   })
    // }
    this.setState({
      flipped: true
    })
  }

  render() {
    const {position, id, name, image} = this.props;
    return (
      <CardContainer 
        data-position={position} 
        data-id={id} 
        data-name={name} 
        onClick={this.onClick}
        flipped={this.state.flipped}
      >
        <CardFront src={image} data-tid="Card" />
        <CardBack src={backimg} data-tid="Card-flipped" />
      </CardContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  flipped: state.flipped,
  flag: state.flag
})

export const Card = connect(mapStateToProps)(CardTemp)
