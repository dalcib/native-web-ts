import * as React from 'react'
//import * as ReactDOM from 'react-dom'
import { Platform } from 'react-native'
import * as renderer from 'react-test-renderer'
import App from './App'

it('renders without crashing', () => {
  if (Platform.OS === 'web') {
    //const div = document.createElement('div')
    //ReactDOM.render(<App />, div)
  } else {
    const rendered = renderer.create(<App />)
    expect(rendered).toBeTruthy()
    expect(rendered).toMatchSnapshot()
  }
})
