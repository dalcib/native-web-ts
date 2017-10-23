import * as React from 'react'
import { createElement } from 'react-native'
import * as PropTypes from 'prop-types'

/**
 * styled API
 */
interface Props {
  style: any
}

const styled = (Component: React.ComponentType, styler: any) => {
  const isDOMComponent = typeof Component === 'string'

  class Styled extends React.Component<Props> {
    static contextTypes = {
      uiTheme: PropTypes.func,
    }

    render() {
      const theme = this.context.uiTheme
      console.log(theme)
      const localProps = { ...this.props, theme }
      const nextProps = { ...this.props }
      const style = typeof styler === 'function' ? styler(localProps) : styler
      nextProps.style = [style, this.props.style]

      return isDOMComponent ? (
        createElement(Component, nextProps)
      ) : (
        <Component {...nextProps} />
      )
    }
  }
  return Styled
}

export default styled
