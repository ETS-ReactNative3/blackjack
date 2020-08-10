import React from 'react'
import { Platform, Text, View, Button, ImageBackground, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import GameActions from 'App/Stores/Game/Actions'
import Style from './GameScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import Game from 'Components/Game'


class GameScreen extends React.Component {

  render() {
    if(this.props.started == true) {
      return <Game/>
    }
  }

  _startGame() {
    console.log("Hello World")
    this.props.startGame()
  }
}

GameScreen.propTypes = {
  started: PropTypes.bool,
  startGame: PropTypes.func, 
}

const mapStateToProps = (state) => ({
  started: state.game.started, 
})

const mapDispatchToProps = (dispatch) => ({
  startGame: () => dispatch(GameActions.startGame())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
