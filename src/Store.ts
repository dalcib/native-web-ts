import { observable, action /* , computed  */ } from 'mobx'

export class Store {
  @observable
  breakpoints = {
    xs: '(max-width: 767px)',
    su: '(min-width: 768px)',
    sm: '(min-width: 768px) and (max-width: 991px)',
    md: '(min-width: 992px) and (max-width: 1199px)',
    mu: '(min-width: 992px)',
    lg: '(min-width: 1200px)',
  }
  @observable isSidebarOpen: boolean
  @action
  setSidebarOpen = (d: boolean) => {
    this.isSidebarOpen = d
    console.log('sidebar open:', d)
  }
  @action toggleSidebar = () => (this.isSidebarOpen = !this.isSidebarOpen)

  @observable isSidebarDocked: boolean
  @action setSidebarDocked = (d: boolean) => (this.isSidebarDocked = d)
  @action
  toggleSidebarDocked = () => (this.isSidebarDocked = !this.isSidebarDocked)

  @observable selected: string[] = []
  @action setSelected = (value: string[]) => (this.selected = value)
  @action
  changeSelected = (value: string) => {
    const index = this.selected.indexOf(value)
    if (index >= 0) {
      // remove item
      this.selected.splice(index, 1)
    } else {
      // add item
      this.selected.push(value)
    }
  }

  @observable searchText: string = ''
  @action setSearchText = (value: string) => (this.searchText = value)
  @observable toolbarHidden: boolean = false
  @observable moveAnimated: any

  @observable active: string = 'people'
  @action setActive = (value: string) => (this.active = value)

  @observable bottomHidden: boolean = false
  @action setBottomHidden = (value: boolean) => (this.bottomHidden = value)

  @observable scene: string
  @action setScene = (scene: string) => (this.scene = scene)
}

const store = new Store()
export default store

/*
const mql = window.matchMedia(`(min-width: 800px)`)

class AppDrawer extends React.Component {
  open = true
  constructor(props) {
    super(props)

    this.state = {
      mql: mql,
      docked: props.docked,
      sidebarOpen: props.open,
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged)
    this.setState({ mql: mql, sidebarDocked: mql.matches })
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open) {
      this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }
  }
*/
