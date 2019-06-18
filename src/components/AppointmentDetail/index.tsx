import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { Theme } from '../../theme'

const SwiperView = (props: any) => {
  return (
    <Swiper
      style={styles.wrapper}
      removeClippedSubviews={false}
      loop={false}
      index={0}
      paginationStyle={{ bottom: 8 }}
      dotColor="rgba(12, 114, 173, 0.5)"
      activeDotColor="#0C72AD"
    >
      <View style={styles.slide1}>
        <View style={styles.itemRow}>
          <Image
            style={styles.imgCalendar}
            source={require('../../assets/Icons/IOS/PNG/calender.png')}
          />
          <Text style={styles.itemTxt}>{props.appointmentDetail.date}</Text>
          <Image
            style={styles.imgClock}
            source={require('../../assets/Icons/IOS/PNG/clock-eight.png')}
          />
          <Text>{props.appointmentDetail.time}</Text>
        </View>
        <View style={styles.itemRow}>
          <Image
            style={styles.imgLocation}
            source={require('../../assets/Icons/IOS/PNG/map-marker-alt.png')}
          />
          <Text style={styles.itemTxt}>{props.appointmentDetail.location}</Text>
        </View>
        <View style={styles.itemRow}>
          <Image
            style={styles.imgMedkit}
            source={require('../../assets/Icons/IOS/PNG/medkit.png')}
          />
          <Text style={styles.itemTxt}>
            {props.appointmentDetail.departmentName}
          </Text>
        </View>
        <View style={styles.itemRow}>
          <Image
            style={styles.imgPhone}
            source={require('../../assets/Icons/IOS/PNG/Phone.png')}
          />
          <Text style={styles.itemTxt}>
            {props.appointmentDetail.phoneNumber}
          </Text>
        </View>
        <View style={styles.itemBottomRow}>
          <Text style={styles.payRowTxt}>Expected Total Pay</Text>
          <Text style={styles.payRowTxt}>{`$${
            props.appointmentDetail.totalPayment
          }`}</Text>
        </View>
      </View>
      <View style={styles.slide2}>
        <View style={styles.itemBottomRow}>
          <Text style={styles.slide2_itemTxt}>Estimated Time to Travel</Text>
          <Text style={styles.slide2_itemTxt}>{`${
            props.appointmentDetail.estimateTime
          }hr`}</Text>
        </View>
        <View style={styles.itemBottomRow}>
          <Text style={styles.slide2_itemTxt}>Duration</Text>
          <Text style={styles.slide2_itemTxt}>{`${
            props.appointmentDetail.duration
          }min`}</Text>
        </View>
        <View style={styles.itemBottomRow}>
          <Text style={styles.slide2_itemTxt}>Pay Rate</Text>
          <Text style={styles.slide2_itemTxt}>{`$${
            props.appointmentDetail.payRate
          }`}</Text>
        </View>
        <View style={styles.itemBottomRow}>
          <Text style={styles.slide2_itemTxt}>Bonus</Text>
          <Text style={styles.slide2_itemTxt}>{`$${
            props.appointmentDetail.bonus
          }`}</Text>
        </View>
        <View style={styles.itemBottomRow}>
          <Text style={styles.payRowTxt}>Expected Total Pay</Text>
          <Text style={styles.payRowTxt}>{`$${
            props.appointmentDetail.totalPayment
          }`}</Text>
        </View>
      </View>
    </Swiper>
  )
}

export default SwiperView

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
  },
  headerWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 64 * Theme.Ratio.H,
    alignItems: 'center',
    paddingRight: 24 * Theme.Ratio.H,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
  },
  headerTxt: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 20 * Theme.Ratio.H,
    color: '#555555',
  },
  itemRow: {
    flexDirection: 'row',
    height: 50 * Theme.Ratio.H,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
    paddingLeft: 24 * Theme.Ratio.H,
  },
  imgCalendar: {
    height: 15.8 * Theme.Ratio.H,
    width: 15.8 * Theme.Ratio.H,
    marginRight: 9.31 * Theme.Ratio.H,
  },
  imgClock: {
    height: 16 * Theme.Ratio.H,
    width: 16 * Theme.Ratio.H,
    marginLeft: 16 * Theme.Ratio.H,
    marginRight: 8 * Theme.Ratio.H,
  },
  itemTxt: {
    fontSize: 14 * Theme.Ratio.H,
    color: '#555555',
    fontFamily: Theme.Fonts.MuliBold,
  },
  slide2_itemTxt: {
    fontSize: 14 * Theme.Ratio.H,
    color: '#555555',
    fontFamily: Theme.Fonts.MuliRegular,
  },
  imgLocation: {
    width: 14.38 * Theme.Ratio.H,
    height: 17.02 * Theme.Ratio.H,
    marginRight: 9.31 * Theme.Ratio.H,
  },
  imgMedkit: {
    width: 15.3 * Theme.Ratio.H,
    height: 15.3 * Theme.Ratio.H,
    marginRight: 8.35 * Theme.Ratio.H,
  },
  imgPhone: {
    width: 18.96 * Theme.Ratio.H,
    height: 18.93 * Theme.Ratio.H,
    marginRight: 5.3 * Theme.Ratio.H,
  },
  itemBottomRow: {
    height: 50 * Theme.Ratio.H,
    flexDirection: 'row',
    paddingRight: 24 * Theme.Ratio.H,
    paddingLeft: 24 * Theme.Ratio.H,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
  },
  payRowTxt: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#0C72AD',
  },
})
