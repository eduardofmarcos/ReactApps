import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

storiesOf('Repos Component', module)
  .add('with title', () => (
    <div>
      <Repos title='Favoritos' />
    </div>
  ))

  .add('with repos', () => (
    <div>
      <Repos
        title='Favoritos'
        repos={[{ git_url: 'http://www.waves.com.br', name: 'Waves' }]}
      />
    </div>
  ))
