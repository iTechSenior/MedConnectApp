import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AuthLoading from './authLoading'
import AuthNavigator from './authNavigator'
import MainNavigator from './mainNavigator/mainNavigator'

const AppNavigator = createSwitchNavigator(
  {
    loading: AuthLoading,
    auth: AuthNavigator,
    main: MainNavigator,
  },
  {
    initialRouteName: 'auth',
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
