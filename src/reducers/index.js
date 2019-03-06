import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';


export default combineReducers({
  charsReducer
});

// const initialState = {
//   people: [],
//   error: '',
//   isFetching: false
// }

// function reducer(state = initialState, action) {
//   switch(action.type) {

//     case FETCHING:
//       return {
//         ...state,
//         isFetching: true,
//         error: ''
//       };
    
//     case SUCCESSFUL_FETCH:
//       return {
//         ...state,
//         people: action.payload,
//         isFetching: false,
//         error: ''
//       };
    
//     case FAILED_FETCH:
//       return {
//         ...state,
//         error: action.payload
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;