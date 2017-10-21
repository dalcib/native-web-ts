import * as React from 'react'
import { View } from 'react-native'
import { ThemeProvider } from 'react-native-material-ui'
import AppToolbar from './AppToolbar'
import store from './Store'
import { Provider, observer } from 'mobx-react'

import Avatar from './scenes/Avatar'
import Badge from './scenes/Badge'
import Button from './scenes/Button'
import Cardd from './scenes/Card'
import Checkbox from './scenes/Checkbox'
import Home from './Home'
import BottonBar from './BottonBar'
import uiTheme from './utils/Theme'
import { AppRouter, Route, history } from './AppRouter'

@observer
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <AppRouter>
            <View>
              <AppToolbar history={history} />
              <Route exact path="/" component={Home} />
              <Route path="/avatar" component={Avatar} />
              <Route path="/badge" component={Badge} />
              <Route path="/button" component={Button} />
              <Route path="/card" component={Cardd} />
              <Route path="/checkbox" component={Checkbox} />
              <BottonBar />
            </View>
          </AppRouter>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App

/* 
//import Home from './Home'
//import ActionButton from './ActionButton/index'
//import ActionButtonToolbar from './ActionButton/ActionButtonToolbar.react'
//import ActionButtonSpeedDial from './ActionButton/ActionButtonSpeedDial.react'
//import BottomNavigation from './scenes/BottomNavigation'
//import Dialog from './scenes/Dialog'
//import Drawer from './scenes/Drawer'
//import IconToggle from './scenes/IconToggle'
//import List from './scenes/List'
//import RadioButton from './scenes/RadioButton'
//import Toolbar from './scenes/Toolbars'
//import Snackbar from './scenes/Snackbar'
//import TextInput from './scenes/TextInput'

<Route path="/avatar" component={Avatar} />
<Route path="/badge" component={Badge} />
<Route path="/bottomNavigation" component={BottomNavigation} />
<Route path="/button" component={Button} />
<Route path="/card" component={Card} />
<Route path="/checkbox" component={Checkbox} />
<Route path="/dialog" component={Dialog} />
<Route path="/drawer" component={Drawer} />
<Route path="/iconToggle" component={IconToggle} />
<Route path="/list" component={List} />
<Route path="/radioButton" component={RadioButton} />
<Route path="/textInput" component={TextInput} />
<Route path="/toolbar" component={Toolbar} />
<Route path="/snackbar" component={Snackbar} />
*/
