import React, { useEffect, useRef, useState } from 'react'
import {
  Alert,
  Animated,
  Easing,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-dynamic-vector-icons'
import { Region } from 'react-native-maps'
import { Rating } from 'react-native-ratings'
import SignatureCapture from 'react-native-signature-capture'
import { AnimatedValue } from 'react-navigation'
import { useNavigation } from 'react-navigation-hooks'
import SwiperView from '../../../../components/AppointmentDetail'
import DismissKeyboardView from '../../../../components/HOC/DismissKeyboard'
import MapViewer from '../../../../components/MapView'
import { Theme } from '../../../../theme'

interface State {
  region: Region
  // tabBarVisible: boolean
  appointmentDetail: IAppointmentDetail
  bottomSheetVisible: boolean
  detailBounceValue: AnimatedValue
  signBounceValue: AnimatedValue
  submitBounceValue: AnimatedValue
  startDrivingBtn: boolean
  startJobBtn: boolean
  completeJobBtn: boolean
  signSheetBar: boolean
  submitBtn: boolean
  appointmentRegion: IRegion
  selectedMarkerId: number
}

interface IRegion {
  latitude: number
  longitude: number
}

interface IAppointmentDetail {
  id: number
  clientName: string
  date: string
  time: string
  location: string
  departmentName: string
  phoneNumber: string
  totalPayment: number
  estimateTime: number
  duration: number
  payRate: number
  bonus: number
}

interface IMarker {
  id: number
  latitude: number
  longitude: number
}

let isSignViewHidden: boolean = true
let isSubmitViewHidden: boolean = true
let isDetailViewHidden: boolean = false

const usePrevious = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const AppointmentDetailScreen = () => {
  const [state, setState] = useState<State>({
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    appointmentDetail: {
      id: -1,
      clientName: '',
      date: '',
      time: '',
      location: '',
      departmentName: '',
      phoneNumber: '',
      totalPayment: -1,
      estimateTime: -1,
      duration: -1,
      payRate: -1,
      bonus: -1,
    },
    appointmentRegion: {
      latitude: -1,
      longitude: -1,
    },
    selectedMarkerId: -1,
    bottomSheetVisible: false,
    detailBounceValue: new Animated.Value(0),
    startDrivingBtn: true,
    startJobBtn: false,
    completeJobBtn: false,
    signSheetBar: false,
    signBounceValue: new Animated.Value(Theme.Resolution.W + 20),
    submitBtn: false,
    submitBounceValue: new Animated.Value(Theme.Resolution.W + 20),
  })
  const navigation = useNavigation()
  const selectedAppointmentRegion = navigation.getParam(
    'SelectedAppointmentRegion',
    'No-Data'
  )
  const showRegion = {
    latitude: selectedAppointmentRegion.latitude - 0.0045,
    longitude: selectedAppointmentRegion.longitude,
  }

  const markersRegion = navigation.getParam('MarkersRegion', 'No-Data')
  const selectedMarkerId = navigation.getParam('SelectedMarkerId', 'No-Data')
  const appointmentList = navigation.getParam('AppointmentList', 'No-Data')

  const prevDetail: any = usePrevious(state.appointmentDetail)
  const prevRegion: any = usePrevious(state.appointmentRegion)
  const selectedAppointmentDetail = navigation.getParam(
    'SelectedAppointment',
    'No-Data'
  )
  useEffect(() => {
    // const ShowRegion = {
    //   latitude: selectedAppointmentRegion.latitude - 0.0045,
    //   longitude: selectedAppointmentRegion.longitude,
    // }

    if (state.selectedMarkerId === -1) {
      setState({ ...state, selectedMarkerId })
    }

    if (state.appointmentRegion.latitude === -1) {
      setState({ ...state, appointmentRegion: showRegion })
    }

    if (state.appointmentDetail.id === -1) {
      setState({ ...state, appointmentDetail: selectedAppointmentDetail })
    }
  })

  // console.log(state.appointmentDetail)

  const onClsBtnClick = () => {
    navigation.goBack()
  }

  const onRegionChange = (region: Region) => {
    setState({ ...state, region })
  }

  const onStartDriving = () => {
    setState({
      ...state,
      startDrivingBtn: !state.startDrivingBtn,
      startJobBtn: !state.startJobBtn,
    })
  }

  const onStartJob = () => {
    setState({
      ...state,
      startJobBtn: !state.startJobBtn,
      completeJobBtn: !state.completeJobBtn,
    })
  }

  const onCompleteJob = () => {
    toggleDetailView()
    toggleSignView()
    setState({
      ...state,
      completeJobBtn: !state.completeJobBtn,
      signSheetBar: !state.signSheetBar,
    })
  }

  const onSubmit = () => {
    toggleDetailView()
    toggleSubmitView()
    navigation.goBack()
  }

  let refSignatureView: any = null

  const onAcceptSign = () => {
    // refSignatureView.saveImage()
    toggleSignView()
    toggleSubmitView()
    setState({
      ...state,
      signSheetBar: !state.signSheetBar,
      submitBtn: !state.submitBtn,
    })
  }

  const onClearSign = () => {
    refSignatureView.resetImage()
  }

  const toggleDetailView = (): void => {
    let toValue: number = 0
    if (!isDetailViewHidden) {
      toValue = Theme.Resolution.W
    }

    Animated.timing(state.detailBounceValue, {
      toValue,
      duration: 300,
      easing: Easing.out(Easing.ease),
    }).start()
    isDetailViewHidden = !isDetailViewHidden
  }

  const toggleSignView = (): void => {
    let toValue: number = Theme.Resolution.W
    if (isSignViewHidden) {
      toValue = 0
    }

    Animated.timing(state.signBounceValue, {
      toValue,
      duration: 300,
      easing: Easing.out(Easing.ease),
    }).start()
    isSignViewHidden = !isSignViewHidden
  }

  const toggleSubmitView = (): void => {
    let toValue: number = Theme.Resolution.W
    if (isSubmitViewHidden) {
      toValue = 0
    }

    Animated.timing(state.submitBounceValue, {
      toValue,
      duration: 300,
      easing: Easing.out(Easing.ease),
    }).start()
    isSubmitViewHidden = !isSubmitViewHidden
  }

  const handleMarker = (id: number) => {
    const selectedMarkerDetail = appointmentList.filter((item: any) => {
      if (item.id === id) {
        return item
      }
    })

    const selectedMarkerRegion = markersRegion.filter((item: any) => {
      if (item.id === id) {
        return item
      }
    })
    const showRegion = {
      latitude: selectedMarkerRegion[0].latitude - 0.0045,
      longitude: selectedMarkerRegion[0].longitude,
    }
    setState({
      ...state,
      selectedMarkerId: id,
      appointmentDetail: selectedMarkerDetail[0],
      appointmentRegion: showRegion,
    })
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        enabled={true}
      >
        <View style={styles.container}>
          <View style={styles.mapContainer}>
            <MapViewer
              region={state.appointmentRegion}
              markers={markersRegion}
              selectedMarkerId={state.selectedMarkerId}
              handleMarker={(id: number) => handleMarker(id)}
            />
          </View>
          <Animated.View
            style={[
              styles.bottomSheetWrapper,
              { transform: [{ translateX: state.detailBounceValue }] },
            ]}
          >
            <View style={styles.bottomSheetView}>
              <View style={styles.headerWrapper}>
                <Text style={styles.headerTxt}>
                  {state.appointmentDetail.clientName}
                </Text>
                {state.startDrivingBtn && (
                  <TouchableOpacity onPress={() => onClsBtnClick()}>
                    <Icon
                      name="md-close"
                      type="Ionicons"
                      style={{ color: '#707070', fontSize: 25 }}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <SwiperView appointmentDetail={state.appointmentDetail} />
            </View>
          </Animated.View>
          <Animated.View
            style={[
              styles.bottomSheetWrapper,
              { transform: [{ translateX: state.signBounceValue }] },
            ]}
          >
            <View style={styles.bottomSheetView}>
              <View style={styles.headerWrapper}>
                <Text style={styles.headerTxt}>Appointment Client Name</Text>
              </View>
              <View style={styles.signatureWrapper}>
                <SignatureCapture
                  style={styles.signature}
                  ref={(c: any) => (refSignatureView = c)}
                  // onSaveEvent={this._onSaveEvent}
                  // onDragEvent={this._onDragEvent}
                  saveImageFileInExtStorage={false}
                  showNativeButtons={false}
                  showTitleLabel={false}
                  viewMode={'portrait'}
                />
              </View>
            </View>
          </Animated.View>
          <Animated.View
            style={[
              styles.submitViewWrapper,
              { transform: [{ translateX: state.submitBounceValue }] },
            ]}
          >
            <DismissKeyboardView style={{ flex: 1 }}>
              <View style={styles.bottomSheetView}>
                <View style={styles.headerWrapper}>
                  <Text style={styles.headerTxt}>Appointment Client Name</Text>
                  {/* {state.startDrivingBtn && (
                <Icon
                  onPress={() => handleDetail()}
                  name="md-close"
                  style={{ color: '#707070', fontSize: 25 }}
                />
              )} */}
                </View>
                <View style={styles.signatureWrapper}>
                  <Text style={styles.submitTxt}>
                    How would you rate your overall experience with our
                    contractor?
                  </Text>
                  <Rating
                    type="star"
                    ratingCount={5}
                    imageSize={37}
                    showRating={false}
                    // onFinishRating={this.ratingCompleted}
                    // style={{ justifyContent: 'flex-start' }}
                  />

                  <TextInput
                    multiline={true}
                    numberOfLines={20}
                    placeholder="Your feedback"
                    style={{
                      height: 189,
                      borderColor: '#DCDCDC',
                      borderWidth: 1,
                    }}
                    // onChangeText={text => this.setState({ text })}
                    // value={this.state.text}
                  />
                </View>
              </View>
            </DismissKeyboardView>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>

      {state.startDrivingBtn && (
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => onStartDriving()}
        >
          <Text style={styles.buttonTxt}>Start Driving Now</Text>
        </TouchableOpacity>
      )}
      {state.startJobBtn && (
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => onStartJob()}
        >
          <Text style={styles.buttonTxt}>Job Start</Text>
        </TouchableOpacity>
      )}
      {state.completeJobBtn && (
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => onCompleteJob()}
        >
          <Text style={styles.buttonTxt}>Job Complete</Text>
        </TouchableOpacity>
      )}
      {state.signSheetBar && (
        <View style={styles.signSheetBar}>
          <TouchableOpacity
            style={styles.acceptBtnWrapper}
            onPress={() => onAcceptSign()}
          >
            <Text style={styles.buttonTxtSemi}>Accept Signature</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clearBtnWrapper}
            onPress={() => onClearSign()}
          >
            <Text style={styles.buttonTxtSemi}>Clear</Text>
          </TouchableOpacity>
        </View>
      )}
      {state.submitBtn && (
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => onSubmit()}
        >
          <Text style={styles.buttonTxt}>Submit</Text>
        </TouchableOpacity>
      )}
    </>
  )
}

export default AppointmentDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subview: { flex: 1 },
  bottomSheetWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 343 * Theme.Ratio.H,
    backgroundColor: 'transparent',
  },
  bottomSheetView: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  headerWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 64 * Theme.Ratio.H,
    alignItems: 'center',
    paddingLeft: 24 * Theme.Ratio.H,
    paddingRight: 24 * Theme.Ratio.H,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
  },

  headerTxt: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 20 * Theme.Ratio.H,
    color: '#555555',
  },
  viewWrapper: {
    flex: 1,
  },
  bottomWrapper: {
    height: Theme.isIPhoneX ? 80 * Theme.Ratio.H : 64 * Theme.Ratio.H,
    flexDirection: 'row',
  },
  buttonWrapper: {
    height: Theme.isIPhoneX ? 80 * Theme.Ratio.H : 64 * Theme.Ratio.H,
    backgroundColor: '#0C72AD',
    justifyContent: 'center',
  },
  buttonAccept: {
    flex: 1,
    backgroundColor: '#19C73F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  btnTxt: {
    fontFamily: Theme.Fonts.MuliSemiBold,
    fontSize: 16 * Theme.Ratio.H,
    color: 'white',
  },
  acceptBtnWrapper: {
    flex: 1,
    backgroundColor: '#19C73F',
    justifyContent: 'center',
  },
  clearBtnWrapper: {
    flex: 1,
    backgroundColor: '#0C72AD',
    justifyContent: 'center',
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: Theme.Resolution.H - 64 * Theme.Ratio.H,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonTxtSemi: {
    fontFamily: Theme.Fonts.MuliSemiBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  signSheetBar: {
    height: Theme.isIPhoneX ? 80 * Theme.Ratio.H : 64 * Theme.Ratio.H,
    backgroundColor: '#0C72AD',
    flexDirection: 'row',
  },
  signatureWrapper: {
    flex: 1,
    paddingVertical: 18 * Theme.Ratio.H,
    paddingHorizontal: 24 * Theme.Ratio.H,
    justifyContent: 'space-between',
  },
  signature: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DCDCDC',
  },
  submitViewWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    height: 410 * Theme.Ratio.H,
  },
  submitView: {
    backgroundColor: '#FFFFFF',
    height: 410 * Theme.Ratio.H,
  },
  submitTxt: {
    fontSize: 16 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.MuliRegular,
    color: '#B7B7B7',
  },
})
