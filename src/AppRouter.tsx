import * as React from 'react'
import { View, DrawerLayoutAndroid } from 'react-native'
import { History, createMemoryHistory } from 'history'
import { NativeRouter } from 'react-router-native'
import { Navigation, Card } from 'react-router-navigation'
//import store from './Store'
import { observer } from 'mobx-react'
//import { autorun } from 'mobx'
import Drawer from './scenes/Drawer'

export const history: History = createMemoryHistory()

let androidDrawer: DrawerLayoutAndroid | any = null
/* autorun(() => {
  if (store.isSidebarOpen) {
    androidDrawer.openDrawer()
  } else {
    androidDrawer.closeDrawer()
  }
}) */

@observer
export class AppRouter extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Navigation>
          <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => <Drawer history={history} />}
            ref={drawer => (androidDrawer = drawer)}
          >
            {this.props.children}
          </DrawerLayoutAndroid>
          <View />
        </Navigation>
      </NativeRouter>
    )
  }
}

export const Route = Card
