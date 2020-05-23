import React from "react";
import SearchBar from "./searchBar";
import UserInfo from "./userInfo";
import ActionButtons from "./actionButtons";
import Repos from "./repos";

const AppContent = ({ userinfo, repos, starred, requestHandler, toggleAbuttonHandler, buttonRepoStatus, buttonStarredStatus }) => (
  <div className="app">
    <SearchBar requestHandler={requestHandler} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <ActionButtons toggleAbuttonHandler={toggleAbuttonHandler}/>}

    {!!repos.length && buttonRepoStatus &&(
      <Repos classname="repositories" repos={repos} title="Repositorios" />
    )}

    {!!starred.length && buttonStarredStatus &&(
      <Repos classname="starred" repos={starred} title="Favoritos" />
    )}
  </div>
);

AppContent.propTypes = {
  userinfo: React.PropTypes.object,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired
};

export default AppContent;
