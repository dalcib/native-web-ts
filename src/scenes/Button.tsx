import { View, StyleSheet } from 'react-native'
import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Button, Subheader } from 'react-native-material-ui'
import { observer } from 'mobx-react'
import Container from './Container'

const styles = StyleSheet.create({
  rowContainer: {
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 8,
  },
})

@withRouter
@observer
class ButtonPage extends React.Component<RouteComponentProps<{}>> {
  render() {
    return (
      <Container>
        <Subheader text="Flat buttons" />
        <View style={styles.rowContainer}>
          <View style={styles.button}>
            <Button primary text="Primary" />
          </View>
          <View style={styles.button}>
            <Button accent text="Accent" />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.button}>
            <Button text="Default" />
          </View>
          <View style={styles.button}>
            <Button disabled text="Disabled" />
          </View>
        </View>

        <Subheader text="Raised buttons" />
        <View style={styles.rowContainer}>
          <View style={styles.button}>
            <Button raised primary text="Primary" />
          </View>
          <View style={styles.button}>
            <Button raised accent text="Accent" />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.button}>
            <Button raised text="Default" />
          </View>
          <View style={styles.button}>
            <Button raised disabled text="Disabled" />
          </View>
        </View>

        <Subheader text="With icons" />
        <View style={styles.rowContainer}>
          <View style={styles.button}>
            <Button primary text="Accept" icon="done" />
          </View>
          <View style={styles.button}>
            <Button accent text="Dismiss" icon="clear" />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.button}>
            <Button raised primary text="Done" icon="done" />
          </View>
          <View style={styles.button}>
            <Button raised accent text="Clear" icon="clear" />
          </View>
        </View>
      </Container>
    )
  }
}

export default ButtonPage
