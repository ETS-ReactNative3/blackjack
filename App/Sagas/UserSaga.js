import { all, takeEvery, put, call, select } from 'redux-saga/effects'
import UserActions from 'App/Stores/User/Actions'
import * as firebase from 'App/Services/Firebase'

const mapAuthProviders = {
  firebase: {
    login: firebase.login,
    register: firebase.register,
    currentAccount: firebase.currentAccount,
    logout: firebase.logout,
  }
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
  const user = yield call(mapAuthProviders[firebase].currentAccount)
  if (user) {
    yield put(UserActions.fetchUserSuccess(user))
  } else {
    yield put(
      UserActions.fetchUserFailure('There was an error while fetching user informations.')
    )
  }
}


export function* loginRequest({ payload }) {
  const { username, password } = payload
  yield put(UserActions.fetchUserLoading())
  const success = yield call(mapAuthProviders[firebase].login, username, password)
  console.log(success)
  if (success) {
    yield put(UserActions.fetchUser())
  } else {
    UserActions.fetchUserFailure('There was an error while fetching user informations.')
  }
}
