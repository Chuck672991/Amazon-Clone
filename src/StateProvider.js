import { createContext,useContext,useReducer } from "react";

// Data Layer
export const StateContext = createContext()

// Context Provider
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    );
  }
  
export const useStateValue =()=> useContext(StateContext)

// useReducer gives us a place to store the data layer