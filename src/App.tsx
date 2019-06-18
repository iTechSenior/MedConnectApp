/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react'
import AppNavigation from './navigation'

import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { from } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo-hooks'
import { getToken } from './utils/AsyncManager'

import { LocationContext } from './AppContext'

// const SplashScreen = NativeModules.SplashScreen

const GRAPHQL_ENDPOINT = `https:/api.medconnectapp.com/graphql`

export const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
})

// tslint:disable-next-line: variable-name
const authMiddleware = setContext(async (_req, { headers }) => {
  const token = await getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: from([authMiddleware, httpLink]),
  cache: new InMemoryCache(),
})

const App = () => {
  // componentDidMount() {
  //   SplashScreen.close({
  //     animationType: SplashScreen.animationType.scale,
  //     duration: 800,
  //     delay: 200,
  //   })
  // }
  const setLocation = (location: any) => {
    console.log('app', location)
    setState({ ...state, location })
  }
  const [state, setState] = useState({
    location: {
      latitude: 0,
      longitude: 0,
    },
    setLocation,
  })
  return (
    <ApolloProvider client={client}>
      <LocationContext.Provider value={state}>
        <AppNavigation />
      </LocationContext.Provider>
    </ApolloProvider>
  )
}

export default App
