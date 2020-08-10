/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  user: null, 
  payload: null, 
  fetching: null, 
  error: null, 
  userIsLoading: false,
  userErrorMessage: null,
  isLoggedIn: false, // Is the user authenticated?
  isLoading: false, // Is the user loggingIn/signinUp?
  isAppReady: false, 
}
