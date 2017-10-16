import App from './src/App'
import react from 'react'
import { Font } from 'expo'

export default class extends react.Component {
  async componentWillMount() {
    Font.loadAsync({
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
    return <App />
  }
}
