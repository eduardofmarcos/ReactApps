import { configure } from '@kadira/storybook'
import '../src/css/style.css'
import '../src/components/app-content/appContent.css'

const req = require.context('../src/components', true, /\.story.js/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
