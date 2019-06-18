import React, { ReactNode, useEffect, useState } from 'react'
import {
  Animated,
  Easing,
  Image,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

import Biometrics from 'react-native-biometrics'
import DeviceInfo from 'react-native-device-info'
import FaceID from '../../../assets/Icons/IOS/PNG/FaceID.png'
import Fingerprint from '../../../assets/Icons/IOS/PNG/Fingerprint.png'
import {
  BioMetricsMode,
  getBioMetrics,
  login,
  setBioMetrics as AsyncSetBioMetrics,
} from '../../../utils/AsyncManager'

import {
  useLoginMutation,
  useLoginWithBiometricsMutation,
} from '../../../graphql'
import styles from './styles'

function FadeInView({ children }: { children: ReactNode }) {
  const [state] = useState({
    fadeAnim: new Animated.Value(0),
  })

  useEffect(() => {
    Animated.timing(state.fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start()
  }, [])

  const { fadeAnim } = state

  return <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>
}

function ToggleLogo({ children }: { children: ReactNode }) {
  const [state, setState] = useState({
    bounceValue: new Animated.Value(250),
  })

  useEffect(() => {
    Animated.timing(state.bounceValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.ease),
    }).start()
  }, [])

  const { bounceValue } = state

  return (
    <Animated.View style={{ transform: [{ translateY: bounceValue }] }}>
      {children}
    </Animated.View>
  )
}

export default () => {
  const [state, setState] = useState({
    emailBorderColor: '#DCDCDC',
    passBorderColor: '#DCDCDC',
    pwdInput: true,
    switchValue: false,
  })
  // const [isProcessing, setIsProcessing] = useState(false)
  const [isBiometricsAvailable, setIsBiometricsAvailable] = useState(null)
  const [email, setEmail] = useState('troy.zarger@medconnectapp.com')
  const [password, setPassword] = useState('password')
  const [supportedBiometrics, setSupportedBiometrics] = useState<string | null>(
    null
  )
  const [loginWithBiometrics, setLoginWithBiometrics] = useState<boolean>(false)

  const { navigate } = useNavigation()
  const loginMutation = useLoginMutation()
  const loginWithBiometricsMutation = useLoginWithBiometricsMutation()

  const checkForBiometrics = async () => {
    try {
      const isBioMetricEnabled = await getBioMetrics() //.then(isBioMetricEnabled => {
      if (isBioMetricEnabled === BioMetricsMode.Enabled) {
        // We have data!!
        setLoginWithBiometrics(true)
      }
      // })
    } catch (error) {
      // console.log(error)
    }
  }

  const checkForSensor = async () => {
    // try {
    const biometryType = await Biometrics.isSensorAvailable() //.then(biometryType => {
    if (biometryType === Biometrics.TouchID) {
      setIsBiometricsAvailable(Fingerprint)
      setSupportedBiometrics('Fingerprint')
    } else if (biometryType === Biometrics.FaceID) {
      setIsBiometricsAvailable(FaceID)
      setSupportedBiometrics('Face ID')
    } else {
      setIsBiometricsAvailable(null)
    }
    checkForBiometrics()
    // } catch (ex) {
    //   // tslint:disable-next-line: no-console
    //   console.log(ex.message)
    // }
  }

  useEffect(() => {
    checkForSensor()
  }, [])

  useEffect(() => {
    if (loginWithBiometrics) {
      processBioMetrics()
    }
  }, [loginWithBiometrics])

  // const pwdRef = useRef(initialValue)
  //   private pwdRef = createRef<TextInput>()

  // componentDidMount() {
  //   SplashScreen.hide()
  // }

  const onEyeImgClick = () => {
    setState({
      ...state,
      passBorderColor: '#0C72AD',
      emailBorderColor: '#DCDCDC',
      pwdInput: !state.pwdInput,
    })
  }

  const onLogInBtnClick = async () => {
    try {
      const loginResponse = await loginMutation({
        variables: {
          email,
          password,
          uuid: DeviceInfo.getUniqueID(),
        },
      })
      // setIsProcessing(false)
      await login(loginResponse!.data!.login.token)
      navigate('TodayActivity')
    } catch (ex) {
      // tslint:disable-next-line: no-console
      console.log(ex)
    }
  }

  const processBioMetrics = async () => {
    const authenticated = await Biometrics.simplePrompt('Confirm fingerprint')
    console.log('$$$$$$$$$$$$$$$$$ > authenticated')
    if (authenticated) {
      console.log(
        '$$$$$$$$$$$$$$$$$ > authenticated',
        authenticated,
        DeviceInfo.getUniqueID()
      )
      const response = await loginWithBiometricsMutation({
        variables: { uuid: DeviceInfo.getUniqueID() },
      })

      console.log('$$$$$$$$$$$$$$$$$ > response!.data', response!.data)
      await login(response!.data!.loginWithBiometrics.token)
      navigate('TodayActivity')
    } else {
      // tslint:disable-next-line: no-console
      console.log('fingerprint failed or prompt was cancelled')
    }
  }

  const onFocus = (item: string): void => {
    switch (item) {
      case 'Email':
        setState({ ...state, emailBorderColor: '#0C72AD' })
        break
      case 'Pass':
        setState({ ...state, passBorderColor: '#0C72AD' })
        break
    }
  }

  const onBlur = (): void => {
    setState({
      ...state,
      emailBorderColor: '#DCDCDC',
      passBorderColor: '#DCDCDC',
    })
  }

  const toggleSwitch = (value: boolean) => {
    setState({ ...state, switchValue: value })
  }

  return (
    <View style={styles.container}>
      <ToggleLogo>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={require('../../../assets/Icons/IOS/PNG/Logo.png')}
          />
          <Image
            style={styles.logoLetter}
            source={require('../../../assets/Icons/IOS/PNG/Name.png')}
          />
        </View>
      </ToggleLogo>
      <FadeInView>
        <View style={styles.form}>
          <Text style={styles.emailLabel}>Email</Text>
          <View
            style={{
              ...styles.textInputWrapper,
              borderColor: state.emailBorderColor,
            }}
          >
            <TextInput
              defaultValue={email}
              style={styles.inputStyle}
              placeholder="example@aaa.com"
              onFocus={() => onFocus('Email')}
              onBlur={onBlur}
              onChangeText={text => {
                setEmail(text)
                // setError({
                //   ...error,
                //   username: false,
                // })
              }}
            />
          </View>
          <View
            style={{
              ...styles.textInputWrapper,
              borderColor: state.passBorderColor,
            }}
          >
            <TextInput
              defaultValue={password}
              secureTextEntry={state.pwdInput}
              style={styles.inputStyle}
              placeholder="Password"
              onFocus={() => onFocus('Pass')}
              onBlur={onBlur}
              onChangeText={text => {
                setPassword(text)
                // setError({
                //   ...error,
                //   password: false,
                // })
              }}
            />
            <TouchableOpacity
              onPressIn={onEyeImgClick}
              onPressOut={onEyeImgClick}
            >
              <Image
                style={styles.eyeImg}
                source={require('../../../assets/Icons/IOS/PNG/eye.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={onLogInBtnClick}>
            <Text style={styles.textLogIn}>Log in</Text>
          </TouchableOpacity>
          {isBiometricsAvailable ? (
            <React.Fragment>
              <View style={styles.switchWrapper}>
                <Text style={styles.switchLabel}>Face ID</Text>
                <Switch
                  trackColor={{ true: '#0C72AD', false: 'lightgray' }}
                  value={loginWithBiometrics}
                  onValueChange={async () => {
                    setLoginWithBiometrics(!loginWithBiometrics)
                    AsyncSetBioMetrics(loginWithBiometrics)
                  }}
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                  style={styles.bioBtn}
                  onPress={processBioMetrics}
                >
                  <Image style={styles.bioId} source={isBiometricsAvailable!} />
                </TouchableOpacity>
              </View>
            </React.Fragment>
          ) : null}
        </View>
      </FadeInView>
    </View>
  )
}
