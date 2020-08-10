import { takeLatest, takeEvery, all } from 'redux-saga/effects'
import { UserTypes } from 'App/Stores/User/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchUser, loginRequest, registerRequest, logOut } from './UserSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(UserTypes.FETCH_USER, fetchUser),
    takeEvery(UserTypes.LOGIN_REQUEST, loginRequest), 
    takeEvery(UserTypes.REGISTER_REQUEST, registerRequest), 
    takeEvery(UserTypes.LOG_OUT, logOut), 
  ])
}
