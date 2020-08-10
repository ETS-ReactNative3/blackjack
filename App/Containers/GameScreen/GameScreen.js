import React from 'react'
import { Platform, Text, View, Button, ImageBackground, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import GameActions from 'App/Stores/Game/Actions'
import UserActions from 'App/Stores/User/Actions'
import Style from './GameScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import Game from 'Components/Game'


class GameScreen extends React.Component {
  _simulateLogout = () => {
    this.props.closeGame()
  }
  
  render() {
    return <Game
      user={this.props.user}
      closeGame={this._simulateLogout}
    />
  }
}

GameScreen.propTypes = {
  started: PropTypes.bool,
  closeGame: PropTypes.func, 
  user: PropTypes.object 
}

const mapStateToProps = (state) => ({
  started: state.game.started, 
  user: state.user.user
})

const mapDispatchToProps = (dispatch) => ({
  closeGame: () => dispatch(UserActions.logOut())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
