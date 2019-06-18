import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Theme } from '../../theme'

interface Props {
  clientName: string
  location: string
  time: string
  type?: string
  onCloseBtnClick: () => void
}

const AppointmentInfo = (props: Props) => {
  const onClsBtnClick = (): void => {
    props.onCloseBtnClick()
  }

  return (
    <View style={styles.subView}>
      <View style={styles.slideView}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTxt}>Appointment Client Name</Text>
          <Icon
            onPress={() => onClsBtnClick()}
            name="md-close"
            style={{ color: '#707070', fontSize: 25 }}
          />
        </View>
        {/* <View style={styles.item}>
          <Text style={styles.clientName}>{props.clientName}</Text>
          <View style={styles.timeView}>
            <Image
              style={styles.clock}
              source={require('../../assets/Icons/IOS/PNG/clock-eight.png')}
            />
            <Text style={styles.timeTxt}>{props.time}</Text>
          </View>
        </View>
        <View style={styles.space} />
        <View style={styles.locationView}>
          <Image
            style={styles.locationMarker}
            source={require('../../assets/Icons/IOS/PNG/map-marker-alt.png')}
          />
          <Text style={styles.locationTxt}>{props.location}</Text>
        </View> */}
      </View>
      <TouchableOpacity style={styles.buttonWrapper}>
        <Text style={styles.buttonTxt}>Start Driving Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AppointmentInfo

const styles = StyleSheet.create({
  subView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    height: 407 * Theme.Ratio.H,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  slideView: {
    flex: 1,
    paddingLeft: 24 * Theme.Ratio.H,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clientName: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 16 * Theme.Ratio.H,
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clock: {
    marginRight: 5 * Theme.Ratio.H,
  },
  timeTxt: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 14 * Theme.Ratio.H,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationMarker: {
    marginRight: 5 * Theme.Ratio.H,
  },
  locationTxt: {
    fontFamily: Theme.Fonts.MuliRegular,
    fontSize: 14 * Theme.Ratio.H,
  },
  space: {
    height: 8 * Theme.Ratio.H,
  },
  buttonWrapper: {
    height: 64 * Theme.Ratio.H,
    backgroundColor: '#0C72AD',
    justifyContent: 'center',
  },
  buttonTxt: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  headerWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 64 * Theme.Ratio.H,
    alignItems: 'center',
    // paddingTop: 20 * Theme.Ratio.H,
    paddingRight: 24 * Theme.Ratio.H,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
  },
  headerTxt: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 20 * Theme.Ratio.H,
    color: '#555555',
  },
})
