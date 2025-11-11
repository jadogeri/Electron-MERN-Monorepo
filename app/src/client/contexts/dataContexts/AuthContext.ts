
import { Dispatch } from "react";
import { createDataContext } from "../createDataContext";
// Define the state type
interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

// Define action types and props
type AuthAction = 
  | { type: 'SIGN_IN'; payload: string }
  | { type: 'SIGN_OUT' }
  | { type: 'SET_LOADING'; payload: boolean };

// Define action creators
const signIn = (dispatch: Dispatch<AuthAction>) => async (token: string) => {
  dispatch({ type: 'SET_LOADING', payload: true });
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  dispatch({ type: 'SIGN_IN', payload: token });
  dispatch({ type: 'SET_LOADING', payload: false });
};

const signOut = (dispatch: Dispatch<AuthAction>) => () => {
  dispatch({ type: 'SIGN_OUT' });
};

const setLoading = (dispatch: Dispatch<AuthAction>) => (isLoading: boolean) => {
  dispatch({ type: 'SET_LOADING', payload: isLoading });
};

// Combine action creators
const actions = { signIn, signOut, setLoading };

// Define the reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, token: action.payload, isAuthenticated: true };
    case 'SIGN_OUT':
      return { ...state, token: null, isAuthenticated: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

// Default state
const defaultState: AuthState = {
  token: null,
  isAuthenticated: false,
  loading: false,
};

// Create the context, provider, and hook
export const { Provider: AuthProvider, useContextHook: useAuthContext } = 
  createDataContext(authReducer, actions, defaultState);

