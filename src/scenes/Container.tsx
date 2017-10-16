import { View, StyleSheet, ViewStyle } from 'react-native'
import * as React from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class Container extends React.Component<{ style?: ViewStyle }> {
  render() {
    return <View style={styles.container}>{this.props.children}</View>
  }
}

export default Container
