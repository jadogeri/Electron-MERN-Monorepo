
// 1. Define the State Type
export interface CounterState {
  count: number;
  delta: number;
  max: number;
  min: number;
}

// 2. Define Action Types
export enum CounterActionType {
  SET_NUMBER = 'SET_NUMBER',
  SET_DELTA = 'SET_DELTA',
  RESET_DELTA = 'RESET_DELTA',
  RESET_COUNT = 'RESET_COUNT',
  DEFAULT = 'DEFAULT'

}

// 3. Define the Action Interface

export interface SetNumberAction {
  type: CounterActionType.SET_NUMBER;
  payload: number;

}

export interface SetDeltaAction {
  type: CounterActionType.SET_DELTA;
  payload: number;

}

export interface ResetDeltaAction {
  type: CounterActionType.RESET_DELTA;
}

export interface ResetCountAction {
  type: CounterActionType.RESET_COUNT;
}

// Union type for all possible actions
export type CounterAction = SetDeltaAction | SetNumberAction | ResetDeltaAction | ResetCountAction ;

// 4. Define the Reducer Function
const reducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
      case CounterActionType.SET_NUMBER: 
        return  {...state , count : state.count + action.payload };
      case CounterActionType.SET_DELTA: 
        return  {...state , delta : state.delta + action.payload };
      case CounterActionType.RESET_DELTA: 
        return  {...state , delta : 0};
      case CounterActionType.RESET_COUNT: 
        return  {...state , count : 0};
  }
};


export default reducer