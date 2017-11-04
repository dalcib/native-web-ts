import * as React from 'react'
import { DrawerLayoutAndroid } from 'react-native'
import { ThemeProvider } from 'react-native-material-ui'
import AppToolbar from './AppToolbar'
import store from './Store'
import { Provider, observer } from 'mobx-react'
import { Navigation, Card } from 'react-router-navigation'
import { History, createMemoryHistory } from 'history'
import { NativeRouter } from 'react-router-native'

import Avatar from './scenes/Avatar'
import Badge from './scenes/Badge'
import Button from './scenes/Button'
import Cardd from './scenes/Card'
import Checkbox from './scenes/Checkbox'
import Home from './Home'
import BottonBar from './BottonBar'
import uiTheme from './utils/Theme'
import Drawer from './scenes/Drawer'
//import { AppRouter, history } from './AppRouter'

export const history: History = createMemoryHistory()

let androidDrawer: DrawerLayoutAndroid | any = null

@observer
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <NativeRouter>
            <Navigation>
              <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <Drawer history={history} />}
                ref={drawer => (androidDrawer = drawer)}
              />
              <AppToolbar history={history} />
              <Card exact path="/" component={Home} />
              <Card path="/avatar" component={Avatar} />
              <Card path="/badge" component={Badge} />
              <Card path="/button" component={Button} />
              <Card path="/card" component={Cardd} />
              <Card path="/checkbox" component={Checkbox} />
              <BottonBar />
            </Navigation>
          </NativeRouter>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
