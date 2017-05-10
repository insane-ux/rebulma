/* eslint-disable global-require */

import { configure } from '@kadira/storybook'

function loadStories() {
  require('../components/Icon/stories.js')
  require('../components/Label/stories.js')
  require('../components/Input/stories.js')
  require('../components/Select/stories.js')
  require('../components/Checkbox/stories.js')
  require('../components/Field/stories.js')
  require('../components/Button/stories.js')
  require('../components/Table/stories.js')
}

configure(loadStories, module)
