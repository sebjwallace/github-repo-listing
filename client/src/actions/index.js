export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';

export const requestRepos = ({
  userType,
  userName,
  type,
  sort,
  page = 0
}) => async dispatch => {
  dispatch({
    type: REQUEST_REPOS,
    loadingRepos: true,
    userType,
    userName,
    repoType: type,
    sort,
    page
  });
  const url = `/${userType}/${userName}/repos?type=${type}&sort=${sort}&direction=desc&page=${page}`;
  const response = await fetch(url);
  const { repos, pages } = await response.json();
  dispatch(receiveRepos(repos, pages));
};

export const receiveRepos = (repos, pages) => ({
  type: RECEIVE_REPOS,
  repos,
  pages
});