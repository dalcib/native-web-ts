import { View, StyleSheet } from 'react-native'
import * as React from 'react'

import { Avatar, Subheader, Toolbar } from 'react-native-material-ui'
import Container from './Container'

const styles = StyleSheet.create({
  avatarContainer: {
    paddingLeft: 16,
  },
})

interface Props {
  history: History
}

class AvatarSpec extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.history.back()}
          centerElement={'Avatars'}
        />
        <Subheader text="Avatars with text" />
        <View style={styles.avatarContainer}>
          <Avatar text="C" />
        </View>
        <Subheader text="Avatars with icon" />
        <View style={styles.avatarContainer}>
          <Avatar icon="person" />
        </View>
      </Container>
    )
  }
}

export default AvatarSpec
