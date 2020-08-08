import React from 'react'
import { Platform, Text, View, Button, ImageBackground, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import GameActions from 'App/Stores/Game/Actions'
import Style from './GameScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'
import Game from 'Components/Game'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

const Onborarding = ({onStartGame})  => {
  return (
    <ImageBackground style ={Style.background} source={require('Assets/Images/background.jpeg')}>
      <View style={{flex: 1}}>
        <View style = {Style.container}>
          <View style={Style.title}> 
            <Text style={{fontSize: 50,color: '#eee', fontWeight: '800'}}>Welcome to <Text style={{fontStyle: 'italic'}}>Blackjack!</Text></Text>
          </View>
          <Button 
            onPress = {onStartGame} 
            title = "Click here to start!"
            buttonStyle = {{backgroundColor: 'red'}}
          />
        </View>
      </View>
    </ImageBackground>
  );
}



class GameScreen extends React.Component {
  componentDidMount() {
    this._fetchUser()
  }

  render() {
    if(this.props.started == true) {
      return <Game/>
    }

    return <Onborarding onStartGame={this._startGame()}/>
  }

  _fetchUser() {
    this.props.fetchUser()
  }

  _startGame() {
    console.log("Hello World")
    this.props.startGame()
  }
}

GameScreen.propTypes = {
  started: PropTypes.bool, 
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  startGame: PropTypes.func, 
}

const mapStateToProps = (state) => ({
  started: state.game.started, 
  user: state.game.user,
  userIsLoading: state.game.userIsLoading,
  userErrorMessage: state.game.userErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(GameActions.fetchUser()),
  startGame: () => dispatch(GameActions.startGame())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)
