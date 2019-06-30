import {
  REQUEST_REPOS,
  RECEIVE_REPOS,
  CHANGE_PAGE
} from '../actions';

export default (state = {
  repos: [],
  page: 1,
  loadingRepos: false
}, action) => {
  switch(action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page
      };
    case REQUEST_REPOS:
      return {
        ...state,
        loadingRepos: true,
        userName: action.userName,
        type: action.repoType,
        sort: action.sort,
        page: action.page
      };
    case RECEIVE_REPOS:
      return {
        ...state,
        loadingRepos: false,
        pages: action.pages ? action.pages : state.pages,
        repos: action.repos
      };
    default:
      return state;
  }
};