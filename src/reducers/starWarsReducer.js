import { FETCHING, SUCCESS, FAILURE } from '../actions';


const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  error: '',
  isFetching: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: ''
      };
    
    case FAILURE:
      return {
        ...state,
        error: action.payload
      };
    
    default:
      return state;
  }
};