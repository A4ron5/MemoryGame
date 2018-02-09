import React from 'react'
import './GamePage.css'
import WrapperGamePage from '../Component/CardList'

const GamePage = (props) => {
	return(
		<div className='game-page container'>
			<WrapperGamePage/>
		</div>
	)
}

export default GamePage;