import { Dispatch } from 'react';
import { createDataContext } from '../createDataContext';


// Define the state type
interface AppState {
  theme: 'light' | 'dark';
  notificationsEnabled: boolean;
}

// Define action types
type AppAction = 
  | { type: 'TOGGLE_THEME' }
  | { type: 'TOGGLE_NOTIFICATIONS' };

// Define action creators
const toggleTheme = (dispatch: Dispatch<AppAction>) => () => {
  dispatch({ type: 'TOGGLE_THEME' });
};

const toggleNotifications = (dispatch: Dispatch<AppAction>) => () => {
  dispatch({ type: 'TOGGLE_NOTIFICATIONS' });
};

// Combine action creators
const actions = { toggleTheme, toggleNotifications };

// Define the reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'TOGGLE_NOTIFICATIONS':
      return { ...state, notificationsEnabled: !state.notificationsEnabled };
    default:
      return state;
  }
};

// Default state
const defaultState: AppState = {
  theme: 'light',
  notificationsEnabled: true,
};

// Create the context, provider, and hook
export const { Provider: AppProvider, useContextHook: useAppContext } = 
  createDataContext(appReducer, actions, defaultState);

