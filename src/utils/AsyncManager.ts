import AsyncStorage from '@react-native-community/async-storage'

const AUTH_TOKEN = 'AUTH_TOKEN'

export enum BioMetricsMode {
  Enabled = 'ENABLED',
  NotEnabled = 'NOT_ENABLED',
}

let token: string | null | undefined

export const getToken = async (): Promise<string | null> => {
  if (token) {
    return token
  }
  return AsyncStorage.getItem(AUTH_TOKEN)
}

export const login = (newToken: string): Promise<void> => {
  token = newToken
  return AsyncStorage.setItem(AUTH_TOKEN, newToken)
}

export const logout = async (): Promise<void> => {
  token = undefined
  return AsyncStorage.removeItem(AUTH_TOKEN)
}

export const getBioMetrics = async (): Promise<string | null> => {
  return AsyncStorage.getItem('@BioMetricsEnabled')
}

export const setBioMetrics = async (biometries: boolean): Promise<void> => {
  return AsyncStorage.setItem(
    '@BioMetricsEnabled',
    !biometries ? BioMetricsMode.Enabled : BioMetricsMode.NotEnabled
  )
}
