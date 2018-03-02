import Initializator from '../../../Initialization/index'

export const restart = () => ({
	type: 'RESTART',
	deck: new Initializator().getDeck()
})
