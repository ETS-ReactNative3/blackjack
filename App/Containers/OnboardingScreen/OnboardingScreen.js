import React, { Component } from 'react'

import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import AuthScreen from 'App/Containers/AuthScreen'
import GameScreen from 'App/Containers/GameScreen/GameScreen'

import UserActions from 'App/Stores/User/Actions'

/**
 * The root component of the application.
 * In this component I am handling the entire application state, but in a real app you should
 * probably use a state management library like Redux or MobX to handle the state (if your app gets bigger).
 */

export class OnboardingScreen extends Component {
  /**
   * Two login function that waits 1000 ms and then authenticates the user succesfully.
   * In your real app they should be replaced with an API call to you backend.
   */
  _simulateLogin = (username, password) => {
    this.setState({ isLoading: true })
    setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
  }

  _simulateSignup = (username, password, fullName) => {
    this.setState({ isLoading: true })
    setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
  }

  /**
   * Simple routing.
   * If the user is authenticated (isAppReady) show the HomeScreen, otherwise show the AuthScreen
   */
  render() {
    if (this.props.isAppReady) {
      return <GameScreen />
    } else {
      return (
        <AuthScreen
          login={this._simulateLogin}
          signup={this._simulateSignup}
          isLoggedIn={this.props.isLoggedIn}
          isLoading={this.props.isLoading}
          onLoginAnimationCompleted={() => this.setState({ isAppReady: true })}
        />
      )
    }
  }
}



GameScreen.propTypes = {
  isLoggedIn:  PropTypes.bool, 
  isLoading:  PropTypes.bool, 
  isAppReady:  PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn, 
  isLoading: state.user.isLoading, 
  isAppReady: state.user.isAppReady, 
})

const mapDispatchToProps = (dispatch) => ({
  _simulateLogin: () => dispatch(UserActions.loginRequest(email, password)),
  _simulateSignup: () => dispatch(UserActions.registerRequest(username, password, fullName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnboardingScreen)

