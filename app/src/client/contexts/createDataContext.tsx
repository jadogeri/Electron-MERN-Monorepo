import React, { useReducer, createContext, useContext, Dispatch, ReactNode } from 'react';

// Define the shape of the bound actions
type BoundActions<A> = {
  [key in keyof A]: A[key] extends (dispatch: Dispatch<any>) => infer R ? R : never;
};

// Generic createDataContext function
export const createDataContext = <S, A, V extends BoundActions<A>>(
  reducer: React.Reducer<S, any>,
  actions: A,
  defaultValue: S
) => {
  const Context = createContext<({ state: S } & V) | undefined>(undefined);

  const Provider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    
    // Bind actions to dispatch
    const boundActions = {} as V;
    for (let key in actions) {
      // TypeScript can infer the return type of the action function when passed to dispatch
      (boundActions as any)[key] = (actions as any)[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  const useContextHook = () => {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error('useContextHook must be used within a Provider');
    }
    return context;
  };

  return { Context, Provider, useContextHook };
};
