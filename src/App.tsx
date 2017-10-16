import * as React from 'react'
import { View } from 'react-native'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'react-native-material-ui'
import Sidebar from 'react-sidebar'

import Avatar from './scenes/Avatar'
import Badge from './scenes/Badge'
import Button from './scenes/Button'
import Card from './scenes/Card'
import Checkbox from './scenes/Checkbox'
import Drawer from './scenes/Drawer'
import Home from './Home'
import uiTheme from './utils/Theme'

//import AppDrawer from './AppDrawer'

const history = createBrowserHistory()

class App extends React.Component<{}, { open: boolean; docked: boolean }> {
  constructor(props: any) {
    super(props)

    this.state = {
      docked: false,
      open: false,
    }

    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen = (ev: any) => {
    this.setState({ open: !this.state.open })
    if (ev) {
      ev.preventDefault()
    }
  }
  render() {
    return (
      <Router history={history}>
        <ThemeProvider uiTheme={uiTheme}>
          <Sidebar
            sidebar={<Drawer />}
            open={this.state.open}
            docked={this.state.docked}
          >
            <View>
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    isOpen={this.state.open}
                    toogleOpen={this.toggleOpen.bind(this)}
                    {...props}
                  />
                )}
              />
              <Route path="/avatar" component={Avatar} />
              <Route path="/badge" component={Badge} />

              <Route path="/button" component={Button} />
              <Route path="/card" component={Card} />
              <Route path="/checkbox" component={Checkbox} />
            </View>
          </Sidebar>
        </ThemeProvider>
      </Router>
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
