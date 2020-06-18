import React from 'react'

import { storiesOf } from '@kadira/storybook'
import Pagination from './index'

const stories = storiesOf('<Pagination/>', module)

stories.add('without props', () => <Pagination />)

stories.add('with total and activePages', () => (
  <Pagination total={10} activePage={5} />
))

stories.add('with pageLink', () => (
  <Pagination
    total={10}
    activePage={5}
    pageLink={'http://www.mypage.com.br/page/%page%'}
  />
))

stories.add('with callback', () => (
  <Pagination
    total={10}
    activePage={5}
    pageLink={'http://www.mypage.com.br/page/%page%'}
    onClick={(page) => {
      window.alert(page)
    }}
  />
))
