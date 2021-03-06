import { Component } from 'react'
import { Provider } from 'react-redux'
import './app.scss'
import configStore from './store'
import { appInitAction } from './store/actions/application'

const store = configStore()
class App extends Component {


  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  onLaunch() {
    store.dispatch(appInitAction())
  }

  // this.props.children 是将要会渲染的页面
  render () {
    return <Provider  store={store}>
     {this.props.children}
    </Provider>
  }
}

export default App
