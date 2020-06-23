import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Actions from './index'

storiesOf('Actions Component', module).add('first story', () => (
  <Actions toggleAbuttonHandler={action('Get repos')} />
))
