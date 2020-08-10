import React from 'react'
import { Text, View, ActivityIndicator, } from 'react-native'
import styles from './SplashScreenStyle'
import { Helpers } from 'App/Theme'
import firebase from 'react-native-firebase'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          {/* You will probably want to insert your logo here */}
          <Text>LOGO</Text>
          <ActivityIndicator size="large" />
        </View>
      </View>
    )
  }
}
