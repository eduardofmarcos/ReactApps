import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import UserInfo from './index'

storiesOf('UserInfo Component', module).add('with Userinfo Object', () => (
  <div>
    <UserInfo
      userinfo={{
        photo: '1234',
        login: 'eduardo@gmail.com',
        username: 'surfin',
        repositories: '10',
        followers: '5',
        following: '3'
      }}
    />
  </div>
))
