import { all, takeEvery, put, call, select } from 'redux-saga/effects'
import UserActions from 'App/Stores/User/Actions'
import * as firebase from 'App/Services/Firebase'
import { Alert } from 'react-native'

const mapAuthProviders = {
  firebase: {
    login: firebase.login,
    register: firebase.register,
    currentAccount: firebase.currentAccount,
    logout: firebase.logout,
  },
}

/**
 * A saga can contain multiple functions.
 *
 * This Game saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.fetchUserLoading())

  // Fetch user informations from an API
  const user = yield call(mapAuthProviders['firebase'].currentAccount)
  if (user) {
    yield put(UserActions.fetchUserSuccess(user))
  } else {
    Alert.alert('There was an error while fetching user informations.')
  }
}

export function* loginRequest({ data }) {
  const { email, password } = data
  yield put(UserActions.fetchUserLoading())
  const success = yield call(mapAuthProviders['firebase'].login, email, password)
  console.log(success)
  if (success) {
    yield put(UserActions.fetchUser())
  } else {
    Alert.alert('There was an error while fetching user informations.')
  }
}

export function* registerRequest({ data }) {
  const { email, password, name } = data
  console.log(email); 
  yield put(UserActions.fetchUserLoading())
  const success = yield call(mapAuthProviders['firebase'].register, email, password, name)
  if (success) {
    yield put(UserActions.fetchUser())
  } else {
    Alert.alert('There was an error while fetching user informations.')
  }
}


export function* logOut() {
  console.log('Hello World')
  const logout = yield call(mapAuthProviders['firebase'].logout)
  if(logout) {
    yield put(UserActions.logOut())
  } else {
    Alert.alert('There was an error while fetching user informations.')
  }
}