import { VisibilityFilters } from "../actions";
import undoable from "redux-undo";
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const undoableVisibilityFilter = undoable(visibilityFilter);
export default undoableVisibilityFilter;
