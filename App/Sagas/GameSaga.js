import { put, call } from 'redux-saga/effects'
import GameActions from 'App/Stores/Game/Actions'
import { userService } from 'App/Services/UserService'

/**
 * A saga can contain multiple functions.
 *
 * This Game saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(GameActions.fetchUserLoading())

  // Fetch user informations from an API
  const user = yield call(userService.fetchUser)
  if (user) {
    yield put(GameActions.fetchUserSuccess(user))
  } else {
    yield put(
      GameActions.fetchUserFailure('There was an error while fetching user informations.')
    )
  }
}
