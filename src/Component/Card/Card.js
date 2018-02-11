import React from 'react'
import './Card.css'

//TODO: СДЕЛАТЬ БОЛЕЕ READABLE

class Card extends React.Component {
  state = {
    isOpen: this.props.isOpen
  }

  flip = () => {
    if(this.props.flag){
      this.setState({
        isOpen: true
      });
    }
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.isOpenAll !== this.state.isOpen){
      this.setState({isOpen: nextProps.isOpen})
    }
  }

  render(){
    const {position, id, name, image} = this.props;
    const isOpen = this.state.isOpen ? 'flipped' : '';
    return (
      <div className={[isOpen, "card-container"].join(' ')}
      data-position={position} 
      data-id = {id} 
      data-name={name}
      onClick={this.flip} >
          <div className="card">
              <img src={`${image}`} alt='card'/>
              <figure className="back"></figure>
          </div>
      </div>
    )
  }
}


export default Card;
