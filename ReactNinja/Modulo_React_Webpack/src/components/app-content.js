import React from 'react';
import SearchBar from './searchBar';
import UserInfo from './userInfo';
import ActionButtons from './actionButtons';
import Repos from './repos';

const AppContent = ({
  userinfo,
  repos,
  starred,
  requestHandler,
  toggleAbuttonHandler,
  bRepoActive,
  bStarredActive,
  isFetching
}) => (
  <div className="app">
    <SearchBar isDisable = {isFetching} requestHandler={requestHandler} />
    {isFetching && <div>Loading...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && (
      <ActionButtons toggleAbuttonHandler={toggleAbuttonHandler} />
    )}

    {!!repos.length && bRepoActive && (
      <Repos classname="repositories" repos={repos} title="Repositorios" />
    )}

    {!!starred.length && bStarredActive && (
      <Repos classname="starred" repos={starred} title="Favoritos" />
    )}
  </div>
);

AppContent.propTypes = {
  userinfo: React.PropTypes.object,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired,
  requestHandler: React.PropTypes.func.isRequired,
  toggleAbuttonHandler: React.PropTypes.func.isRequired,
  bRepoActive: React.PropTypes.bool.isRequired,
  bStarredActive: React.PropTypes.bool.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
};

export default AppContent;
