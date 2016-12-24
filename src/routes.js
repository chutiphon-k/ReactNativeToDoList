import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import PageOne from './containers/PageOne'
import PageTwo from './containers/PageTwo'

export default () => (
    <Router>
      <Scene key="root">
        <Scene key="pageOne" component={PageOne} title="PageOneTitle" initial={true} />
        <Scene key="pageTwo" component={PageTwo} title="PageTwoTitle" />
      </Scene>
    </Router>
)