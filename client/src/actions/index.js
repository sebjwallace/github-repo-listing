export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const requestRepos = ({
  userName,
  type,
  sort,
  page = 0
}) => async dispatch => {
  dispatch({
    type: REQUEST_REPOS,
    loadingRepos: true,
    userName,
    repoType: type,
    sort,
    page
  });
  const url = `/repos/${userName}?type=${type}&sort=${sort}&direction=desc&page=${page}`;
  const response = await fetch(url);
  const { repos, pages } = await response.json();
  dispatch(receiveRepos(repos, pages));
};

export const receiveRepos = (repos, pages) => ({
  type: RECEIVE_REPOS,
  repos,
  pages
});

export const changePage = page => ({
  type: CHANGE_PAGE,
  page
})