import { View, StyleSheet } from 'react-native'
import * as React from 'react'

import { Checkbox } from 'react-native-material-ui'
import Container from './Container'
import { RouteComponentProps } from 'react-router'
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
})

class CheckboxSpec extends React.Component<
  RouteComponentProps<{}>,
  { checked: boolean }
> {
  constructor(props: RouteComponentProps<{}>) {
    super(props)

    this.state = { checked: false }
  }
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Checkbox
            label="Unchecked"
            checked={this.state.checked}
            value="Value"
            onCheck={checked => this.setState({ checked })}
          />
          <Checkbox
            label="Checked by default"
            checked
            value="Value"
            onCheck={() => {}}
          />
          <Checkbox
            label="Custom icon"
            checked
            uncheckedIcon="star-border"
            checkedIcon="star"
            value="Value"
            onCheck={() => {}}
          />
          <Checkbox
            label="Disabled unchecked"
            disabled
            value="Value"
            onCheck={() => {}}
          />
          <Checkbox
            label="Disabled checked"
            checked
            disabled
            value="Value"
            onCheck={() => {}}
          />
        </View>
      </Container>
    )
  }
}

export default CheckboxSpec
