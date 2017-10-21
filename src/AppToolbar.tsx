import * as React from 'react'
import { Toolbar } from 'react-native-material-ui'
import { observer } from 'mobx-react'
import store from './Store'
import { History } from 'history'

interface Props {
  history: History
}

@observer
export default class AppToolbar extends React.Component<Props> {
  render() {
    console.log(store.scene, !!store.scene, store)

    if (store.scene) {
      return (
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => {
            this.props.history.goBack()
            store.scene = ''
          }}
          centerElement={store.scene}
        />
      )
    }
    if (store.selected.length > 0) {
      return (
        <Toolbar
          key="toolbar"
          leftElement="clear"
          onLeftElementPress={() => store.setSelected([])}
          centerElement={store.selected.length.toString()}
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
          store.toggleSidebar()
        }}
        centerElement={'Select component'}
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
          onChangeText: (value: any) => store.setSearchText(value),
          onSearchClosed: () => store.setSearchText(''),
        }}
      />
    )
  }
}
