import {
  SET_CURRENT_PAGE,
  REQUEST_REPOS,
  RECEIVE_REPOS
} from '../actions';

export default (state = {
  repos: [],
  loadingRepos: false
}, action) => {
  switch(action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.page
      };
    case REQUEST_REPOS:
      return {
        ...state,
        loadingRepos: true
      };
    case RECEIVE_REPOS:
      return {
        ...state,
        loadingRepos: false,
        repos: action.repos
      };
    default:
      return state;
  }
};