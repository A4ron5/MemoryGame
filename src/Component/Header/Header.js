import React from 'react'
import Count from '../Count/Count.js'
import './Header.css'

class Header extends React.Component {
	render() {
		return (
			<header className='gamepage-header'>
				<a className='restart' onClick={this.props.restart}>Начать заново</a>
				<Count>
					Очки: {this.props.count}
				</Count>
			</header>
		)
	}
}

export default Header;