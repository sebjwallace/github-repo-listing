import {
  SET_USER,
  SET_REPO_TYPE,
  SET_REPO_SORT,
  SET_CURRENT_PAGE,
  REQUEST_REPOS,
  RECEIVE_REPOS
} from '../actions';

export default (state = {
  loadingRepos: false
}, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        userName: action.userName
      };
    case SET_REPO_TYPE:
      return {
        ...state,
        type: action.type
      };
    case SET_REPO_SORT:
      return {
        ...state,
        sort: action.sort
      };
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