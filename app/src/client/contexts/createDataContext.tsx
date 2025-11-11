import React, { useReducer, ReactNode } from 'react';

type Reducer<S, A> = (state: S, action: A) => S;

export default function createDataContext<S, A>(
  reducer: Reducer<S, A>,
  actions: { [key: string]: (dispatch: React.Dispatch<A>) => any },
  initialState: S
) {
  const Context : React.Context<any>= React.createContext<any>({
    
  }) ;

  const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: { [key: string]: (args?: any) => void } = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}