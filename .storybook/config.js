/* eslint-disable global-require */

import { configure } from '@kadira/storybook'

function loadStories() {
  require('../components/Icon/stories.js')
}

configure(loadStories, module)
