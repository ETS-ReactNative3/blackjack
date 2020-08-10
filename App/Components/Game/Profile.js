import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  TextInput,
  Keyboard,
  Platform,
  TouchableOpacity
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const isAndroid = Platform.OS == 'android'
const viewPadding = 10

class Profile extends Component {
  state = {
    text: '',
    funds: null
  }

  changeTextHandler = (text) => {
    this.setState({ text: text })
  }


  componentDidMount() {
    Keyboard.addListener(isAndroid ? 'keyboardDidShow' : 'keyboardWillShow', (e) =>
      this.setState({ viewMargin: e.endCoordinates.height + viewPadding })
    )

    Keyboard.addListener(isAndroid ? 'keyboardDidHide' : 'keyboardWillHide', () =>
      this.setState({ viewMargin: viewPadding })
    )

  }

  render() {
    return (
      <View style={[styles.container, { paddingBottom: this.state.viewMargin }]}>
        <TouchableOpacity
          style={styles.navBarLeftButton}
          onPress={this.props.onClose}
        >
          <FontAwesomeIcon icon={faTimesCircle} size={24} color={'black'} />
        </TouchableOpacity>
        <View
          style={{
            width: 300,
            height: 300,
            paddingTop: 100
          }}
        >
          <Text style={{ fontSize: 50, textAlign: 'center' }}>Your Balance</Text>
          <Text style={{ fontSize: 50, textAlign: 'center' }}>$100</Text>
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder="Add Funds"
          returnKeyType="done"
          returnKeyLabel="done"
        />
        <Button
            onPress={this.props.onClose}
            title="Add Funds"
            buttonStyle={{ backgroundColor: 'red' }}
          />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: viewPadding,
    paddingTop: 50,
    flexDirection: 'column',
  },
  list: {
    width: '100%',
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18,
  },
  hr: {
    height: 1,
    backgroundColor: 'gray',
  },
  listItemCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: 'gray',
    borderWidth: isAndroid ? 0 : 1,
    width: '100%',
  },
  icon: {
    marginTop: 30,
    marginLeft: 5,
  },
  navBarLeftButton: {
    paddingLeft: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: 'black',
    fontSize: 22,
  },
  loginButton: {
    backgroundColor: 'white'
  },
  loginButtonText: {
    color: '#3E464D',
    fontWeight: 'bold'
  },
})


  
export default Profile
