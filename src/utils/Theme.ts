import { COLOR } from 'react-native-material-ui'
import typography from './typography'

export default {
  spacing: {
    actionButtonSize: 56,
    // https://material.google.com/layout/metrics-keylines.html#metrics-keylines-touch-target-size
    iconSize: 24,
    avatarSize: 40,
    snackbarHeight: 48,
  },
  typography,
  fontFamily: 'Roboto',
  palette: {
    // main theme colors
    primaryColor: COLOR.blue500,
    accentColor: COLOR.red500,
    // text color palette
    //primaryTextColor: Color(black).alpha(.87).toString(),
    //secondaryTextColor: Color(black).alpha(.54).toString(),
    alternateTextColor: COLOR.white,
    // backgournds and borders
    canvasColor: COLOR.white,
    //borderColor: Color(black).alpha(.12).toString(),
    // https://material.google.com/style/color.html#color-text-background-colors
    //disabledColor: Color(black).alpha(.38).toString(),
    //disabledTextColor: Color(black).alpha(.26).toString(),
    //activeIcon: Color(black).alpha(.54).toString(),
    //inactiveIcon: Color(black).alpha(.38).toString(),
    //pickerHeaderColor: COLOR.cyan500,
    //clockCircleColor: faintBlack,
    //shadowColor: fullBlack,
  },
}
