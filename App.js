import App from './src/App'
import React from 'react'
import { Font } from 'expo'

export default class extends React.Component {
  state = {
    isReady: false,
  }
  async /* componentWillMount */ loadFonts() {
    await Font.loadAsync({
      'Roboto-Black': require('./public/fonts/Roboto-Black.ttf'),
      'Roboto-BlackItalic': require('./public/fonts/Roboto-BlackItalic.ttf'),
      'Roboto-Bold': require('./public/fonts/Roboto-Bold.ttf'),
      'Roboto-BoldItalic': require('./public/fonts/Roboto-BoldItalic.ttf'),
      'Roboto-Light': require('./public/fonts/Roboto-Light.ttf'),
      'Roboto-LightItalic': require('./public/fonts/Roboto-LightItalic.ttf'),
      'Roboto-Medium': require('./public/fonts/Roboto-Medium.ttf'),
      'Roboto-MediumItalic': require('./public/fonts/Roboto-MediumItalic.ttf'),
      'Roboto-Regular': require('./public/fonts/Roboto-Regular.ttf'),
      'Roboto-Thin': require('./public/fonts/Roboto-Thin.ttf'),
      'Roboto-ThinItalic': require('./public/fonts/Roboto-ThinItalic.ttf'),
      'Roboto-Italic': require('./public/fonts/Roboto-Italic.ttf'),
      'Material-Icons': require('./public/fonts/MaterialIcons-Regular.ttf'),
      'RobotoMono-Regular': require('./public/fonts/RobotoMono-Regular.ttf'),
    })
  }
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadFonts}
          onFinish={() =>
            this.setState({
              isReady: true,
            })}
          onError={console.warn}
        />
      )
    }
    return <App />
  }
}
