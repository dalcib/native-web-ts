import { COLOR } from 'react-native-material-ui'

export const gu = 4

export const Breakpoints = {
  xs: '@media (min-width: 480px)',
  sm: '@media (min-width: 600px)', // Mobile landscape
  ms: '@media (min-width: 840px)',
  md: '@media (min-width: 960px)', // Tablet
  ml: '@media (min-width: 1280px)', // Desktop
  lg: '@media (min-width: 1440px)',
  xl: '@media (min-width: 1600px)',
}

const ColorsWB = {
  blackPrimary: 'rgba(0, 0, 0, 0.87)',
  blackSecondary: 'rgba(0, 0, 0, 0.54)',
  blackHint: 'rgba(0, 0, 0, 0.38)',
  blackTransparent: 'rgba(0, 0, 0, 0)',

  whitePrimary: 'rgba(255, 255, 255, 1)',
  whiteSecondary: 'rgba(255, 255, 255, 0.70)',
  whiteHint: 'rgba(255, 255, 255, 0.50)',
  whiteTransparent: 'rgba(255, 255, 255, 0)',
}

const Colors = { ...COLOR, ColorsWB }

export default {
  display4: {
    color: Colors.blackSecondary,
    fontFamily: 'Roboto-Light',
    fontSize: 112,
    // NOTE Not currently in MD spec, making educated guess
    lineHeight: 112,
  },
  display3: {
    color: Colors.blackSecondary,
    fontFamily: 'Roboto-Regular',
    fontSize: 56,
    // NOTE Not in MD spec
    lineHeight: 56,
  },
  display2: {
    color: Colors.blackSecondary,
    fontFamily: 'Roboto-Regular',
    fontSize: 45,
    lineHeight: 48,
  },
  display1: {
    color: Colors.blackSecondary,
    fontFamily: 'Roboto-Regular',
    fontSize: 34,
    lineHeight: 40,
  },
  headline: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    lineHeight: 32,
  },
  title: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    // NOTE Not in MD spec
    lineHeight: 28,
  },
  subheading: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 24,
    //[Breakpoints.ml]: { fontSize: 15 },
  },
  body2: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 24,
    //[Breakpoints.ml]: { fontSize: 13 },
  },
  body1: {
    color: Colors.blackPrimary,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 20,
    //[Breakpoints.ml]: { fontSize: 13 },
  },
  caption: {
    color: Colors.blackSecondary,
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    // NOTE Not in MD spec
    lineHeight: 16,
  },
}
