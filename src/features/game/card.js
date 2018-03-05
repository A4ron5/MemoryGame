import React from 'react'
import { CardFront } from '../../ui/atoms/front'
import { CardBack } from '../../ui/atoms/back'
import { CardContainer } from '../../ui/molecules/Card'
import { connect } from 'react-redux'
import { click } from '../../ac'
import backimg from '../../Initialization/Data/Cards/back.jpg'

class CardTemp extends React.Component {

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