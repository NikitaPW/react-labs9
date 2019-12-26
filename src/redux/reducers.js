import { EMPLOYEES_LOADED, EMPLOYEE_ADDED, FETCHING_EMPLOYEES, FETCHING_EMPLOYEES_ERROR } from "./constants";

export const initialState = {
  employees: [],
  isLoaded: false,
  isFetching: false,
  isError: null
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees });
      return{
              ... state,
              employees,
              isLoaded: true,
              isFetching: false
            }
    }
    case EMPLOYEE_ADDED: {
          const { employee } = action.payload;
          return {
            ...state,
            employees: [...state.employees, employee]
        }
    }
    case FETCHING_EMPLOYEES:{
        return { ...state, isFetching: true, isError: null };
    }
    case FETCHING_EMPLOYEES_ERROR:{
        const isError = action.payload;
        return { ...state, isFetching: false, isError };
    }
    default:
        return state
  }
}

export default appReducer;