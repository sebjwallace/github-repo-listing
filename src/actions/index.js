export const SET_USER = 'SET_USER';
export const SET_REPO_TYPE = 'SET_REPO_TYPE';
export const SET_REPO_SORT = 'SET_REPO_SORT';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';

const generateUrl = (userName, type, sort, page) =>
`http://localhost:3000/repos/${userName}?type=${type}&sort=${sort}&direction=asc&page=${page}`;

export const setUser = userName => ({
  type: SET_USER,
  userName
});

export const setRepoType = type => ({
  type: SET_REPO_TYPE,
  type
});

export const setRepoSort = sort => ({
  type: SET_REPO_SORT,
  sort
});

export const requestRepos = ({
  userName,
  type,
  sort,
  page
}) => async dispatch => {
  const { json } = await fetch(generateUrl(userName,type,sort,page));
  const { repos, pages } = await json();
  dispatch(receiveRepos(repos, pages));
};

export const receiveRepos = (repos, pages) => ({
  type: RECEIVE_REPOS,
  repos,
  pages
});