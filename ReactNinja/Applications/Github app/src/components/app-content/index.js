import React from 'react'
import SearchBar from 'components/search/index'
import UserInfo from 'components/userInfo/index'
import ActionButtons from 'components/actionButtons/index'
import Repos from 'components/repos/index'
import './app.css'

const AppContent = ({
  userInfo,
  repos,
  starred,
  requestHandler,
  toggleAbuttonHandler,
  bRepoActive,
  bStarredActive,
  isFetching,
  handlePagination
}) => (
  <div className='app'>
    <SearchBar isDisable={isFetching} requestHandler={requestHandler} />
    {isFetching && <div>Loading...</div>}
    {!!userInfo && <UserInfo userinfo={userInfo} />}
    {!!userInfo && (
      <ActionButtons toggleAbuttonHandler={toggleAbuttonHandler} />
    )}

    <div className='repos-container'>
      {!!repos.length && bRepoActive && (
        <Repos
          className='repos'
          repos={repos}
          title='Repositorios'
          handlePagination={(clicked) => handlePagination('repos', clicked)}
        />
      )}

      {!!starred.length && bStarredActive && (
        <Repos
          className='starred'
          repos={starred}
          title='Favoritos'
          handlePagination={(clicked) => handlePagination('starred', clicked)}
        />
      )}
    </div>
  </div>
)

AppContent.propTypes = {
  userinfo: React.PropTypes.object,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired,
  requestHandler: React.PropTypes.func.isRequired,
  toggleAbuttonHandler: React.PropTypes.func.isRequired,
  bRepoActive: React.PropTypes.bool.isRequired,
  bStarredActive: React.PropTypes.bool.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  handlePagination: React.PropTypes.func.isRequired
}

export default AppContent
