import { createActions } from 'reduxsauce'

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in App/Stores/Game/Reducers.js
 * - to trigger sagas, for example in App/Sagas/index.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in App/App.js
 * - in sagas using `yield put(...)`, for example in App/Sagas/GameSaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 *
 * Users can :
 * - Login, in order to login user must
 * - Confirm age
 * - Enter an ammount of money to exchange for betting credit
 * - Select min and max betting option
 * -
 *
 * User
 */
const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['username'],
  loginFailure: ['error'],
  registerRequest: ['username', 'password', 'fullName'], 
  registerSuccess: ['username'],
  registerFailure: ['error'],
  fetchUser: null,
  // The operation has started and is loading
  fetchUserLoading: null,
  // User informations were successfully fetched
  fetchUserSuccess: ['user'],
  // An error occurred
  fetchUserFailure: ['errorMessage'],
  logout: null,
})

export const UserTypes = Types
export default Creators
