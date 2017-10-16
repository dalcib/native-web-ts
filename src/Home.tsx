import * as React from 'react'
import {
  ToastAndroid,
  ScrollView,
  Platform,
  Animated,
  Easing,
} from 'react-native'

import Container from './scenes/Container'
// components
import {
  ActionButton,
  Avatar,
  ListItem,
  Toolbar,
  BottomNavigation,
  Icon,
} from 'react-native-material-ui'

const UP = 1
const DOWN = -1

class Home extends React.Component<
  { toogleOpen: () => void; isOpen: boolean },
  {
    selected: string[]
    searchText: string
    toolbarHidden: boolean
    active: string
    moveAnimated: any
    open: boolean
    bottomHidden: boolean
  }
> {
  offset: number
  scrollDirection: number
  constructor(props: any) {
    super(props)

    this.offset = 0
    this.scrollDirection = 0

    this.state = {
      selected: [],
      searchText: '',
      toolbarHidden: false,
      active: 'people',
      moveAnimated: new Animated.Value(0),
      open: false,
      bottomHidden: false,
    }
  }
  onAvatarPressed = (value: any) => {
    const { selected } = this.state

    const index = selected.indexOf(value)

    if (index >= 0) {
      // remove item
      selected.splice(index, 1)
    } else {
      // add item
      selected.push(value)
    }

    this.setState({ selected })
  }
  onScroll = (ev: any) => {
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

      this.setState({
        bottomHidden: currentDirection === DOWN,
      })
    }
  }

  show = () => {
    Animated.timing(this.state.moveAnimated, {
      toValue: 0,
      duration: 225,
      easing: Easing.bezier(0.0, 0.0, 0.2, 1),
      useNativeDriver: Platform.OS === 'android',
    }).start()
  }

  hide = () => {
    Animated.timing(this.state.moveAnimated, {
      toValue: 56, // because the bottom navigation bar has height set to 56
      duration: 195,
      easing: Easing.bezier(0.4, 0.0, 0.6, 1),
      useNativeDriver: Platform.OS === 'android',
    }).start()
  }

  renderToolbar = () => {
    if (this.state.selected.length > 0) {
      return (
        <Toolbar
          key="toolbar"
          leftElement="clear"
          onLeftElementPress={() => this.setState({ selected: [] })}
          centerElement={this.state.selected.length.toString()}
          rightElement={['delete']}
          style={{
            container: { backgroundColor: 'white' },
            titleText: { color: 'rgba(0,0,0,.87)' },
            leftElement: { color: 'rgba(0,0,0,.54)' },
            rightElement: { color: 'rgba(0,0,0,.54)' },
          }}
        />
      )
    }
    return (
      <Toolbar
        key="toolbar"
        leftElement="menu"
        onLeftElementPress={() => {
          this.props.toogleOpen()
        }}
        centerElement={'Select component'}
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
          onChangeText: (value: any) => this.setState({ searchText: value }),
          onSearchClosed: () => this.setState({ searchText: '' }),
        }}
      />
    )
  }
  renderItem = (title: string, route: string) => {
    const searchText = this.state.searchText.toLowerCase()

    if (searchText.length > 0 && title.toLowerCase().indexOf(searchText) < 0) {
      return null
    }

    return (
      <ListItem
        divider
        leftElement={<Avatar text={title[0]} />}
        centerElement={title}
        onLeftElementPress={() => this.onAvatarPressed(title)}
        onPress={() => /* this.props.history.push(route)   */ {
        }}
      />
    )
  }
  render() {
    /////////////////keyboardShouldPersistTaps
    return (
      <Container>
        {this.renderToolbar()}
        <ScrollView keyboardDismissMode="interactive" onScroll={this.onScroll}>
          {this.renderItem('Avatars', '/avatar')}
          {this.renderItem('Badge', '/badge')}
          {this.renderItem('Bottom navigation', '/bottomNavigation')}
          {this.renderItem('Buttons', '/button')}
          {this.renderItem('Cards', '/card')}
          {this.renderItem('Checkbox', '/checkbox')}
          {this.renderItem('Dialog', '/dialog')}
          {this.renderItem('Drawer', '/drawer')}
          {this.renderItem('Icon toggles', '/iconToggle')}
          {this.renderItem('List items', '/list')}
          {this.renderItem('Radio buttons', '/radioButton')}
          {this.renderItem('Snackbar', '/snackbar')}
          {this.renderItem('TextInput', '/textInput')}
          {this.renderItem('Toolbars', '/toolbar')}
        </ScrollView>
        <ActionButton
          actions={[
            { icon: 'email', label: 'Email' },
            { icon: 'phone', label: 'Phone' },
            { icon: 'sms', label: 'Text' },
            { icon: 'favorite', label: 'Favorite' },
          ]}
          hidden={this.state.bottomHidden}
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
        <BottomNavigation
          active={this.state.active}
          hidden={this.state.bottomHidden}
          style={{
            container: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            },
          }}
        >
          <BottomNavigation.Action
            key="today"
            icon={<Icon name="today" />}
            label="Today"
            onPress={() => this.setState({ active: 'today' })}
          />
          <BottomNavigation.Action
            key="people"
            icon="people"
            label="People"
            onPress={() => this.setState({ active: 'people' })}
          />
          <BottomNavigation.Action
            key="bookmark-border"
            icon="bookmark-border"
            label="Bookmark"
            onPress={() => this.setState({ active: 'bookmark-border' })}
          />
          <BottomNavigation.Action
            key="settings"
            icon="settings"
            label="Settings"
            onPress={() => this.setState({ active: 'settings' })}
          />
        </BottomNavigation>
      </Container>
    )
  }
}

export default Home
