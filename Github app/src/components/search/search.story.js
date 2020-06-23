import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Search from './index'

storiesOf('Search Component', module)
  .add('with request handler', () => (
    <div>
      <Search requestHandler={action('Request handler')} />
    </div>
  ))

  .add('with isDisable', () => (
    <div>
      <Search requestHandler={action('Request handler')} isDisable='true' />
    </div>
  ))
