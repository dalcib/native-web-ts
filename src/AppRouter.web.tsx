import * as React from 'react'
import { View } from 'react-native'
import { createBrowserHistory } from 'history'
import store from './Store'
import { observer } from 'mobx-react'
import Sidebar from 'react-sidebar'
import { Router, Route as BrowserRoute } from 'react-router-dom'
import {} from 'history'
import DevTools from 'mobx-react-devtools'
import Drawer from './scenes/Drawer'

export const history = createBrowserHistory()

let __DEV__: boolean
if (process.env.NODE_ENV === 'development') {
  __DEV__ = true
}

@observer
export class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Sidebar
          sidebar={<Drawer history={history} />}
          open={store.isSidebarOpen}
          docked={store.isSidebarDocked}
          onSetOpen={() => store.setSidebarOpen(true)}
        >
          <View>
            {__DEV__ && <DevTools />}
            {this.props.children}
          </View>
        </Sidebar>
      </Router>
    )
  }
}

export const Route = BrowserRoute
