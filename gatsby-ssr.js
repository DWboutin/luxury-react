import React from 'react'
import { Provider } from 'react-redux'

import { siteMetadata } from './gatsby-config'
import { WithIntl } from './src/i18n'
import { store } from './src/store'

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <Provider store={store}>
      <WithIntl {...props} baseLanguage={siteMetadata.baseLanguage}>
        {element}
      </WithIntl>
    </Provider>
  )
}

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const pluginsCSS = <link rel="stylesheet" href="assets/css/plugins.css" />
  const styleCSS = <link rel="stylesheet" href="assets/css/style.css" />
  const pluginsJs = <script key="pluginsjs-script" src="assets/js/plugins.js" />
  const mainJs = <script key="pluginsjs-script" src="assets/js/main.js" async />

  setHeadComponents([pluginsCSS, styleCSS, pluginsJs])
  setPostBodyComponents([mainJs])
}
