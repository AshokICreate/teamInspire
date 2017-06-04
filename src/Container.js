import React from 'react';
import {Scene, Reducer, Router, Switch, TabBar, Modal, Actions} from 'react-native-router-flux'
import Login from './Login'
import CreateAccount from './CreateAccount'
import ForgotPassword from './ForgotPassword'
import Home from './Home'

export default class CAAppContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var that = this;
        return <Router>
                  <Scene key="root">
                      <Scene key="Login" initial={true} component={Login} hideNavBar={true} />
                      <Scene key="CreateAccount"  hideNavBar={true} component={CreateAccount} />
                      <Scene key="ForgotPassword" hideNavBar={true} component={ForgotPassword} />
                      <Scene key="Home" hideNavBar={true} component={Home} />
                  </Scene>
               </Router>
    }
}
