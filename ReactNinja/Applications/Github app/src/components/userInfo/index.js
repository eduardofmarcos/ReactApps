'use-strict'

import React, { PropTypes } from 'react'
import './..//userInfo/userinfo.css'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.photo} alt='avatar_pic' />
    <h1 className='username'>
      <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
    </h1>
    <ul className='repos-info'>
      <li>Repostorios: {userinfo.repositories}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.defaultProps = {
  userinfo: PropTypes.shape({
    username: '',
    photo: '',
    login: '',
    repositories: '',
    followers: '',
    following: ''
  })
}

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repositories: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
