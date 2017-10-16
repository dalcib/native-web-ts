import { View, StyleSheet } from 'react-native'
import * as React from 'react'

import { Checkbox, Toolbar } from 'react-native-material-ui'
import Container from './Container'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
})

interface Props {
  history: History
}

class CheckboxSpec extends React.Component<Props, { checked: boolean }> {
  constructor(props: Props) {
    super(props)

    this.state = { checked: false }
  }
  render() {
    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.history.back()}
          centerElement={'Checkboxes'}
        />
        <View style={styles.container}>
          <Checkbox
            label="Unchecked"
            checked={this.state.checked}
            value="Value"
            onCheck={checked => this.setState({ checked })}
          />
          <Checkbox label="Checked by default" checked value="Value" />
          <Checkbox
            label="Custom icon"
            checked
            uncheckedIcon="star-border"
            checkedIcon="star"
            value="Value"
          />
          <Checkbox label="Disabled unchecked" disabled value="Value" />
          <Checkbox label="Disabled checked" checked disabled value="Value" />
        </View>
      </Container>
    )
  }
}

export default CheckboxSpec
