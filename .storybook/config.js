/* eslint-disable global-require */

import { configure } from '@kadira/storybook'

function loadStories() {
  require('../components/Icon/stories.js')
  require('../components/Box/stories.js')
  require('../components/Label/stories.js')
  require('../components/Input/stories.js')
  require('../components/Select/stories.js')
  require('../components/Checkbox/stories.js')
  require('../components/Field/stories.js')
  require('../components/Button/stories.js')
  require('../components/Table/stories.js')
  require('../components/Menu/stories.js')
  require('../components/TopNav/stories.js')
  require('../components/Tabs/stories.js')
  require('../components/Panel/stories.js')
  require('../components/Modal/stories.js')
  require('../components/Delete/stories.js')
  require('../components/Tag/stories.js')
  require('../components/Notification/stories.js')
  require('../components/MultiTagEdit/stories.js')
}

configure(loadStories, module)
