import * as React from 'react'
import {
  ToastAndroid,
  ScrollView,
  Platform,
  Animated,
  Easing,
} from 'react-native'
import Container from './scenes/Container'
import { ActionButton, Avatar, ListItem } from 'react-native-material-ui'
import { RouteComponentProps, withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'
import { Store } from './Store'

interface Props extends RouteComponentProps<{}> {
  //toogleOpen: () => void
  //isOpen: boolean
  store: Store
}

@inject('store')
@withRouter
@observer
class Home extends React.Component<Props> {
  offset: number
  scrollDirection: number
  moveAnimated: any

  onScroll = (ev: any) => {
    const UP = 1
    const DOWN = -1
    const currentOffset = ev.nativeEvent.contentOffset.y
    const sub = this.offset - currentOffset
    // don't care about very small moves
    if (sub > -2 && sub < 2) {
      return
    }
    this.offset = ev.nativeEvent.contentOffset.y
    const currentDirection = sub > 0 ? UP : DOWN
    if (this.scrollDirection !== currentDirection) {
      this.scrollDirection = currentDirection
      this.props.store.setBottomHidden(currentDirection === DOWN)
    }
  }

  show = () => {
    Animated.timing(this.props.store.moveAnimated, {
      toValue: 0,
      duration: 225,
      easing: Easing.bezier(0.0, 0.0, 0.2, 1),
      useNativeDriver: Platform.OS === 'android',
    }).start()
  }

  hide = () => {
    Animated.timing(this.props.store.moveAnimated, {
      toValue: 56, // because the bottom navigation bar has height set to 56
      duration: 195,
      easing: Easing.bezier(0.4, 0.0, 0.6, 1),
      useNativeDriver: Platform.OS === 'android',
    }).start()
  }

  renderItem = (title: string, route: string) => {
    const searchText = this.props.store.searchText.toLowerCase()

    if (searchText.length > 0 && title.toLowerCase().indexOf(searchText) < 0) {
      return null
    }

    return (
      <ListItem
        divider
        leftElement={<Avatar text={title[0]} />}
        centerElement={title}
        onLeftElementPress={() => this.props.store.changeSelected(title)}
        onPress={() => {
          this.props.history.push(route)
          this.props.store.setScene(title)
        }}
      />
    )
  }
  render() {
    return (
      <Container>
        {/* this.renderToolbar() */}
        <ScrollView keyboardDismissMode="interactive" onScroll={this.onScroll}>
          {this.renderItem('Avatars', '/avatar')}
          {this.renderItem('Badge', '/badge')}
          {/* this.renderItem('Bottom navigation', '/bottomNavigation') */}
          {this.renderItem('Buttons', '/button')}
          {this.renderItem('Cards', '/card')}
          {this.renderItem('Checkbox', '/checkbox')}
          {/* this.renderItem('Dialog', '/dialog')}
          {this.renderItem('Drawer', '/drawer')}
          {this.renderItem('Icon toggles', '/iconToggle')}
          {this.renderItem('List items', '/list')}
          {this.renderItem('Radio buttons', '/radioButton')}
          {this.renderItem('Snackbar', '/snackbar')}
          {this.renderItem('TextInput', '/textInput')}
          {this.renderItem('Toolbars', '/toolbar') */}
        </ScrollView>
        <ActionButton
          actions={[
            { icon: 'email', label: 'Email' },
            { icon: 'phone', label: 'Phone' },
            { icon: 'sms', label: 'Text' },
            { icon: 'favorite', label: 'Favorite' },
          ]}
          hidden={this.props.store.bottomHidden}
          icon="share"
          transition="speedDial"
          onPress={action => {
            if (Platform.OS === 'android') {
              ToastAndroid.show(action, ToastAndroid.SHORT)
            }
          }}
          style={{
            container: { bottom: 76 },
          }}
        />
      </Container>
    )
  }
}

export default Home
