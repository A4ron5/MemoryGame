import React from 'react'
import { CardFront } from '../../ui/atoms/front'
import { CardBack } from '../../ui/atoms/back'
import { CardContainer } from '../../ui/molecules/Card'
import { connect } from 'react-redux'
import backimg from '../../Initialization/Data/Cards/back.jpg'

class CardTemp extends React.PureComponent {

	state = {
		flipped: this.props.flipped
	}
		
	componentWillReceiveProps(nextProps) {
		if(this.props.flag){
			setTimeout(() => {
				this.setState({flipped: nextProps.flipped})
			}, 500)
		}
	}
	
	onClick = () => {
		this.setState({
			flipped: false
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