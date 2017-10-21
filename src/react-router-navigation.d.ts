declare module 'react-router-navigation' {
  //BottonNavigation
  import * as React from 'react'
  import {
    Dimensions,
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
  } from 'react-native'
  import {
    NavigationTransitionProps,
    NavigationTransitionSpec,
  } from 'react-navigation'
  import { TabViewPagerPanProps } from 'react-native-tab-view'
  import { ComponentClass, ReactElement, PureComponent, Component } from 'react'
  import { RouteComponentProps } from 'react-router'
  import { History } from 'history'

  type Route = {
    key: string
    routeName: string
  }

  type NavigationState<OwnRoute> = {
    index: number // $FlowFixMe
    routes: Array<Route & OwnRoute>
  }

  type RouteProps<props = {}> = {
    component?: ComponentClass<RouteComponentProps<props>>
    render?: (props: RouteComponentProps<props>) => ValidReactRenderResult
    children?: (props: RouteComponentProps<props>) => ValidReactRenderResult
    path: string
    exact?: boolean
    strict?: boolean
    state?: Object
  }

  /**
 * Navigation
 */

  type ValidReactRenderResult = JSX.Element | null | false

  type NavBarProps = {
    // General
    hideNavBar?: boolean
    renderNavBar?: (props: CardSubViewProps) => ValidReactRenderResult
    navBarStyle?: StyleProp<ViewStyle>
    // Left button
    hideBackButton?: boolean
    backButtonTintColor?: string
    backButtonTitle?: string
    renderLeftButton?: (props: CardSubViewProps) => ValidReactRenderResult
    // Title
    title?: string
    titleStyle?: StyleProp<TextStyle>
    renderTitle?: (props: CardSubViewProps) => ValidReactRenderResult
    // Right button
    renderRightButton?: (props: CardSubViewProps) => ValidReactRenderResult
  }

  type NavigationProps = NavBarProps & {
    cardStyle?: StyleProp<ViewStyle>
    configureTransition?: (
      transitionProps: NavigationTransitionProps,
      prevTransitionProps?: NavigationTransitionProps
    ) => NavigationTransitionSpec
    onTransitionStart?: Function
    onTransitionEnd?: Function
  }

  type CardProps = RouteProps & NavBarProps

  type Card = CardProps & { key: string }

  type CardsRendererProps = {
    onNavigateBack: Function
    navigationState: NavigationState<{
      path?: string
      params?: Object
    }>
    cards: Array<Card>
  }

  type CardSubViewProps = any
  // & NavigationSceneRendererProps
  // & CardsRendererProps
  // & CardProps
  /**
 * Tabs
 */

  type TabBarProps = {
    hideTabBar?: boolean
    renderTabBar?: (
      props: TabSubViewProps
    ) => ValidReactRenderResult | undefined
    tabBarStyle?: StyleSheet
    tabStyle?: StyleSheet
    label?: string
    labelStyle?: StyleSheet
    renderLabel?: (props: TabSubViewProps) => ValidReactRenderResult | undefined
    tabTintColor?: string
    tabActiveTintColor?: string
    // <BottomNavigation /> only:
    renderTabIcon?: (
      props: TabSubViewProps
    ) => ValidReactRenderResult | undefined
    // <Tabs /> only:
    tabBarPosition?: 'top' | 'bottom'
    tabBarIndicatorStyle?: StyleSheet
  }

  type TabsProps = TabBarProps & {
    // <Tabs /> only:
    initialLayout?: { width?: number; height?: number }
    configureTransition?: Function
  }

  type TabProps = RouteProps & TabBarProps & { onReset?: Function }

  type Tab = TabProps & { key: string }

  type TabsRendererProps = {
    onRequestChangeTab: (index: number) => void
    navigationState: NavigationState<{
      title?: string
      testID?: string
    }>
    tabs: Array<Tab>
  }

  type TabSubViewProps = any

  type Props = TabBarProps & {
    children?: Array<React.ReactElement<TabProps>>
    lazy?: boolean
    style?: StyleSheet
  }

  type DefaultProps = {
    lazy: true
  }

  type State = {
    key: string
  }

  //BottonNavigation
  export class BottomNavigation extends React.Component<Props, State> {
    static defaultProps: DefaultProps

    state: State

    renderPager: (sceneProps: TabViewPagerPanProps) => React.ReactNode

    renderNavigationBar: (
      sceneProps: TabSubViewProps,
      props: TabBarProps
    ) => React.ReactNode

    renderScene: (sceneProps: TabSubViewProps) => React.ReactNode

    render(): React.ReactElement<any>
  }

  //Card
  export const Card: (props: CardProps) => ReactElement<Props>

  //CardStack
  type StateCardStack = {
    key: number
    navigationState: NavigationState<{}>
    cards: Array<Card>
  }

  type PropsCardStack = {
    history: History // eslint-disable-next-line
    children?: Array<ReactElement<any>>
    render: (props: CardsRendererProps) => ReactElement<any>
  }

  export class CardStack extends PureComponent<PropsCardStack, StateCardStack> {
    props: PropsCardStack
    state: StateCardStack

    unlistenHistory: Function

    // Update navigation state
    onListenHistory: (history: History, nextHistory: History) => void

    // Pop to previous scene (n-1)
    onNavigateBack: () => boolean
  }

  //NavBar

  type PropsNavBar = CardSubViewProps

  export class NavBar extends Component<PropsNavBar, void> {
    props: PropsNavBar

    renderLeftComponent: (
      sceneProps: CardSubViewProps
    ) => ReactElement<any> | null

    renderTitleComponent: (
      sceneProps: CardSubViewProps
    ) => ReactElement<any> | null

    renderRightComponent: (
      sceneProps: CardSubViewProps
    ) => ReactElement<any> | null
  }

  //Navigation
  type PropsNavigation = NavigationProps & {
    children?: Array<ReactElement<any>>
  }

  export class Navigation extends Component<PropsNavigation> {
    props: PropsNavigation

    renderHeader: (
      sceneProps: CardSubViewProps,
      props: CardSubViewProps
    ) => ReactElement<any> | undefined

    renderSceneComponent: (
      sceneProps: CardSubViewProps
    ) => ComponentClass<any> | undefined
  }

  //Tab
  export const Tab: (props: Props) => ReactElement<TabProps>

  //TabStack
  type PropsTabStack = {
    history: History // eslint-disable-next-line
    children?: Array<ReactElement<any>>
    render: (props: TabsRendererProps) => ReactElement<any> // eslint-disable-next-line
    lazy?: boolean
    forceSync?: boolean
  }

  type DefaultPropsTabStack = {
    forceSync: false
  }

  type StateTabStack = {
    navigationState: NavigationState<{
      title?: string
      testID?: string
    }>
    tabs: Array<Tab>
    rootIndex: number
    tabsHistory: { [key: number]: Array<Location> }
  }

  export class TabStack extends PureComponent<PropsTabStack, StateTabStack> {
    props: PropsTabStack
    state: StateTabStack

    unlistenHistory: Function

    static defaultProps: DefaultPropsTabStack

    // Update navigation state
    onListenHistory: (history: History, nextHistory: History) => void

    // Callback for when the current tab changes
    onRequestChangeTab: (index: number) => void
  }

  //Tabs
  type PropsTabs = TabBarProps & {
    children?: Array<ReactElement<any>>
  }

  type StateTabs = {
    key: string
  }

  export class Tabs extends Component<PropsTabs, StateTabs> {
    props: PropsTabs
    state: StateTabs

    renderHeader: (sceneProps: TabSubViewProps) => ReactElement<any> | null

    renderFooter: (sceneProps: TabSubViewProps) => ReactElement<any> | null

    renderTabBar: (
      sceneProps: TabSubViewProps,
      props: TabSubViewProps
    ) => ReactElement<any> | null

    renderScene: (sceneProps: TabSubViewProps) => ReactElement<any> | null
  }
}
/* 
// High-level wrappers
export { default as BottomNavigation } from './modules/BottomNavigation'
export { default as Card } from './modules/Card'
export { default as Tab } from './modules/Tab'
export { default as NavBar } from './modules/NavBar'
export { default as Navigation } from './modules/Navigation'
export { default as Tabs } from './modules/Tabs'

// Low-level building blocks
export { default as CardStack } from './modules/CardStack'
export { default as TabStack } from './modules/TabStack'

export {
  CardProps,
  CardsRendererProps,
  CardSubViewProps,
  NavBarProps,
  NavigationProps,
  NavigationState,
  Route,
  RouteProps,
  TabBarProps,
  TabProps,
  TabsProps,
  TabsRendererProps,
  TabSubViewProps,
  ValidReactRenderResult,
} from './modules/TypeDefinitions' */
