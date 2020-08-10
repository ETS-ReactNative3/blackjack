/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  user: {},
  userIsLoading: false,
  userErrorMessage: null,
  isLoggedIn: false, // Is the user authenticated?
  isLoading: false, // Is the user loggingIn/signinUp?
  isAppReady: false, 
}
