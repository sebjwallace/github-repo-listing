export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';

export const requestRepos = ({
  userName,
  type,
  sort,
  page = 0
}) => async dispatch => {
  dispatch({
    type: REQUEST_REPOS,
    loadingRepos: true
  });
  const url = `/repos/${userName}?type=${type}&sort=${sort}&direction=asc&page=${page}`;
  const response = await fetch(url);
  const { repos, pages } = await response.json();
  dispatch(receiveRepos(repos, pages));
};

export const receiveRepos = (repos, pages) => ({
  type: RECEIVE_REPOS,
  repos,
  pages
});