import { View, StyleSheet } from 'react-native'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Avatar, Subheader } from 'react-native-material-ui'
import Container from './Container'

class AvatarSpec extends React.Component<RouteComponentProps<{}>> {
  render() {
    return (
      <Container>
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

const styles = StyleSheet.create({
  avatarContainer: {
    paddingLeft: 16,
  },
})

export default AvatarSpec
