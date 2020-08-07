import { takeLatest, all } from 'redux-saga/effects'
import { GameTypes } from 'App/Stores/Game/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchUser } from './GameSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(GameTypes.FETCH_USER, fetchUser),
  ])
}
