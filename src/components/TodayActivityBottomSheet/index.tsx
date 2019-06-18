import React, { useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import SlidingUpPanel from 'rn-sliding-up-panel'
import AppointmentList from '../../screens/mainStack/TodayActivity/AppointmentList'
import { Theme } from '../../theme'

const SlidingSheet = (props: any) => {
  const [state, setState] = useState({
    bottomSheetVisible: false,
  })

  let refSlideView: any = null
  const draggedValue = new Animated.Value(77 * Theme.Ratio.H)

  const handleBottomSheet = (): void => {
    setState({ bottomSheetVisible: !state.bottomSheetVisible })
    if (state.bottomSheetVisible) {
      refSlideView.show()
    } else {
      refSlideView.hide()
    }
  }

  const handleDetail = (): void => {
    handleBottomSheet()
    props.handleDetail()
  }

  return (
    <>
      <SlidingUpPanel
        showBackdrop={false}
        ref={c => (refSlideView = c)}
        draggableRange={{
          top: 356 * Theme.Ratio.H,
          bottom: 77 * Theme.Ratio.H,
        }}
        animatedValue={draggedValue}
      >
        <View style={styles.draggableView}>
          <View style={styles.hideBtnWrapper}>
            <View style={styles.hideBtn} />
          </View>

          <View style={styles.subView}>
            <View style={styles.headerWrapper}>
              <View style={styles.headerTxtWrapper}>
                <Text
                  style={styles.subViewHeaderTxt}
                  onPress={(): void => handleBottomSheet()}
                >
                  Today's Activity
                </Text>
              </View>
            </View>
            <AppointmentList
              appointmentList={props.appointmentList}
              handleDetail={props.handleDetail}
            />
          </View>
        </View>
      </SlidingUpPanel>
    </>
  )
}

// SlidingSheet.router = ActivityNav.router

export default SlidingSheet

const styles = StyleSheet.create({
  draggableView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    flex: 1,
    // position: 'relative',
    height: 356 * Theme.Ratio.H,
    backgroundColor: 'transparent',
  },
  headerWrapper: {
    height: 64 * Theme.Ratio.H,
    paddingTop: 20 * Theme.Ratio.H,
    paddingLeft: 24 * Theme.Ratio.H,
  },
  subViewHeaderTxt: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 20 * Theme.Ratio.H,
    color: '#555555',
  },
  subView: {
    backgroundColor: 'white',
    height: 343 * Theme.Ratio.H,
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
  hideBtnWrapper: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8 * Theme.Ratio.H,
  },
  hideBtn: {
    width: 48 * Theme.Ratio.H,
    height: 5 * Theme.Ratio.H,
    backgroundColor: '#0B71AC',
    borderRadius: 25,
  },
  headerTxtWrapper: {
    height: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
  },
})
