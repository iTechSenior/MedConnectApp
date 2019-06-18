import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Theme } from '../../theme'

interface Props {
  clientName: string
  location: string
  time: string
  type: string
  expectedPrice?: number
}

const AppointmentItem = (props: Props) => {
  let template = null
  switch (props.type) {
    case 'normal':
      template = (
        <View style={styles.containerNormal}>
          <View style={styles.item}>
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
          </View>
        </View>
      )
      break
    case 'accepted':
      template = (
        <View>
          <View style={styles.topView}>
            <View style={styles.item}>
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
            </View>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.priceLabel}>Expected</Text>
            <Text style={styles.priceTxt}>{`$${props.expectedPrice}`}</Text>
            <View style={styles.badgeAccepted}>
              <Text style={styles.badgeTxt}>ACCEPTED</Text>
            </View>
          </View>
        </View>
      )
      break
    case 'past':
      template = (
        <View>
          <View style={styles.topView}>
            <View style={styles.item}>
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
            </View>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.priceLabel}>Expected</Text>
            <Text style={styles.priceTxt}>{`$${props.expectedPrice}`}</Text>
            <View style={styles.starWrapper}>
              <Image
                style={styles.starImg}
                source={require('../../assets/Icons/IOS/PNG/star-f.png')}
              />
              <Image
                style={styles.starImg}
                source={require('../../assets/Icons/IOS/PNG/star-f.png')}
              />
              <Image
                style={styles.starImg}
                source={require('../../assets/Icons/IOS/PNG/star-f.png')}
              />
              <Image
                style={styles.starImg}
                source={require('../../assets/Icons/IOS/PNG/star-half.png')}
              />
              <Image
                style={styles.starImg}
                source={require('../../assets/Icons/IOS/PNG/star.png')}
              />
            </View>
          </View>
        </View>
      )
      break
    case 'declined':
      template = (
        <View>
          <View style={styles.topView}>
            <View style={styles.item}>
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
            </View>
          </View>
          <View style={styles.bottomViewDeclined}>
            <View style={styles.badgeDeclined}>
              <Text style={styles.badgeTxt}>DECLINED</Text>
            </View>
          </View>
        </View>
      )
      break
  }
  return template
}

export default AppointmentItem

const styles = StyleSheet.create({
  bottomView: {
    paddingRight: 20 * Theme.Ratio.H,
    flexDirection: 'row',
    height: 60 * Theme.Ratio.H,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#F1F3F8',
  },
  bottomViewDeclined: {
    paddingRight: 20 * Theme.Ratio.H,
    flexDirection: 'row',
    height: 60 * Theme.Ratio.H,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#F1F3F8',
    justifyContent: 'flex-end',
  },
  topView: {
    paddingRight: 20 * Theme.Ratio.H,
    height: 89 * Theme.Ratio.H,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#F1F3F8',
  },
  containerNormal: {
    paddingRight: 20 * Theme.Ratio.H,
    height: 93 * Theme.Ratio.H,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#F1F3F8',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clientName: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#555555',
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
    color: '#B7B7B7',
  },
  space: {
    height: 8 * Theme.Ratio.H,
  },
  priceLabel: {
    fontFamily: Theme.Fonts.MuliRegular,
    fontSize: 14 * Theme.Ratio.H,
    color: '#B7B7B7',
  },
  priceTxt: {
    flex: 1,
    marginLeft: 8 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#555555',
  },
  badgeAccepted: {
    width: 95 * Theme.Ratio.H,
    height: 24 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2FA449',
    borderRadius: 17,
  },
  badgeDeclined: {
    width: 95 * Theme.Ratio.H,
    height: 24 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E61212',
    borderRadius: 17,
  },
  badgeTxt: {
    fontFamily: Theme.Fonts.MuliRegular,
    fontSize: 12 * Theme.Ratio.H,
    color: '#FFFFFF',
  },
  starWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starImg: {
    width: 19.98 * Theme.Ratio.H,
    height: 19 * Theme.Ratio.H,
    marginRight: 8.02 * Theme.Ratio.H,
  },
})
