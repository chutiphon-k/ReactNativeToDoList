import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import routes from './routes'

const store = configureStore()

export default () => (
	<Provider store={store} key='provider'>
		{routes()}
	</Provider>
)