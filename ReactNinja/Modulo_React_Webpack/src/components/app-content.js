import React from "react";
import SearchBar from "./searchBar";
import UserInfo from "./userInfo";
import ActionButtons from "./actionButtons";
import Repos from "./repos";

const AppContent = ({ userinfo, repos, starred, requestHandler }) => (
  <div className="app">
    <SearchBar requestHandler={requestHandler} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <ActionButtons />}

    {!!repos.length && (
      <Repos classname="repositories" repos={repos} title="Repositorios" />
    )}

    {!!starred.length && (
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
