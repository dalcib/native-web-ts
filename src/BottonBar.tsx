import * as React from 'react'
import { BottomNavigation, Icon } from 'react-native-material-ui'
import { observer } from 'mobx-react'
import store from './Store'

@observer
export default class BottonBar extends React.Component {
  render() {
    return (
      <BottomNavigation active={store.active} hidden={store.bottomHidden}>
        <BottomNavigation.Action
          key="today"
          icon={<Icon name="today" />}
          label="Today"
          onPress={() => store.setActive('today')}
        />
        <BottomNavigation.Action
          key="people"
          icon="people"
          label="People"
          onPress={() => store.setActive('people')}
        />
        <BottomNavigation.Action
          key="bookmark-border"
          icon="bookmark-border"
          label="Bookmark"
          onPress={() => store.setActive('bookmark-border')}
        />
        <BottomNavigation.Action
          key="settings"
          icon="settings"
          label="Settings"
          onPress={() => store.setActive('settings')}
        />
      </BottomNavigation>
    )
  }
}
