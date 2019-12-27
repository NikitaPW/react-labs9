import { EMPLOYEES_LOADED, EMPLOYEE_ADDED, FETCHING_EMPLOYEES, FETCHING_EMPLOYEES_ERROR, LOGIN_FAIL, LOGIN_SUCCESS } from "./constants";

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}

export const addEmployee = (employee) => {
  return {
    type: EMPLOYEE_ADDED,
    payload: {
      employee
    }
  };
}

export const fetchingEmployees = (employees) =>{
  return{
    type: FETCHING_EMPLOYEES,
    payload: { }
  };
}

export const fetchingEmployeesError = (employees) =>{
  console.log("ERROR occured!");
  return {
    type: FETCHING_EMPLOYEES_ERROR,
    payload:{
      isError
    }
  };
}

export const fetchEmployees = () =>{
  return dispatch=>{
    dispatch(fetchingEmployees());
    return fetch('http://localhost:3004/employees')
         .then((data) => data.json())
         .then(
             employees=>dispatch(employeesLoaded(employees)),
             isError=>dispatch(fetchingEmployeesError(isError))
         )
  }
}

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload:{
      user
    }
  };
}

export const loginFail = username => {
  return {
    type: LOGIN_FAIL,
    payload:{
      username
    }
  }
}

export const login = name => {
  return dispatch => {
     return fetch("http://localhost:3004/users")
        .then(data => data.json())
        .then(users => {
        const user = users.find(user => user.username === name);
           if (user !== undefined) {
                dispatch(loginSuccess(user));
           } else {
                dispatch(loginFail(name));
           }
        });
    };
}