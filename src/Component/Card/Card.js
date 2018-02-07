import React from 'react'
import './Card.css'

//TODO: СДЕЛАТЬ БОЛЕЕ READABLE

class Card extends React.Component {
  state = {
    isOpen: this.props.test
  }

  flip = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  componentWillReceiveProps(nextProps){
    if(this.props.test == nextProps.test){
      this.setState({ isOpen: !nextProps.test})
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
