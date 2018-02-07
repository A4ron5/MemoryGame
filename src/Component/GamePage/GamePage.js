import React from 'react'
import './GamePage.css'

const GamePage = (props) => {
	return(
		<div className='game-page container'>
			{props.children}
		</div>
	)
}

export default GamePage;