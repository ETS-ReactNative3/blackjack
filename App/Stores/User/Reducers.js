/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { UserTypes } from './Actions'

export const fetchUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const fetchUserSuccess = (state, { user }) => ({
  ...state,
  user: user,
  userIsLoading: false,
  userErrorMessage: null,
})

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const logOut = (state, {errorMessage}) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })




/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.LOGIN_REQUEST]: request,
  [UserTypes.LOGIN_SUCCESS]: success,
  [UserTypes.LOGIN_FAILURE]: failure, 
  [UserTypes.REGISTER_FAILURE]: request, 
  [UserTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [UserTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [UserTypes.FETCH_USER_FAILURE]: fetchUserFailure,
  [UserTypes.LOG_OUT]: logOut
})
