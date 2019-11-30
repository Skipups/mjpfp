  
import {
  //UPDATE_DISPLAYED_EMPLOYEES,
  //UPDATE_PAGE_NUMBER,
  //UPDATE_TOTAL_EMPLOYEES,
} from './constants';

const intialState = {
  currentYear: 0,
  currentMonth: 0,
  currentDay: 0,
  events:[]
  // rowsPerPage is hardcoded for now
  // but could be made dynamic if you wanted to adjust how many results are displayed

};

// export const rootReducer = (state = intialState, action) => {
//   switch (action.type) {
//     case UPDATE_DISPLAYED_EMPLOYEES:
//       return { ...state, displayedEmployees: action.payload };
//     case UPDATE_PAGE_NUMBER:
//       return { ...state, currentPage: action.payload };
//     case UPDATE_TOTAL_EMPLOYEES:
//       return { ...state, totalEmployees: action.payload };
//     default:
//       return state;
//   }
// };