import { StyleSheet } from 'react-native'
import { Theme } from '../../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    height: 179 * Theme.Ratio.H,
    paddingTop: 36 * Theme.Ratio.H,
    paddingBottom: 36 * Theme.Ratio.H,
    paddingLeft: 24 * Theme.Ratio.H,
  },
  avatar: {
    width: 52 * Theme.Ratio.H,
    height: 52 * Theme.Ratio.H,
    marginBottom: 16 * Theme.Ratio.H,
  },
  userName: {
    fontFamily: Theme.Fonts.MuliBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#0C72AD',
    marginBottom: 6 * Theme.Ratio.H,
  },
  starImgWrapper: {
    flexDirection: 'row',
  },
  starImg: {
    width: 19.98 * Theme.Ratio.H,
    height: 19 * Theme.Ratio.H,
    marginRight: 8.02 * Theme.Ratio.H,
  },

  listWrapper: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#F1F3F8',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
    paddingLeft: 24 * Theme.Ratio.H,
  },
  logoutBtn: {
    paddingLeft: 24 * Theme.Ratio.H,
    height: 64 * Theme.Ratio.H,
    paddingTop: 21 * Theme.Ratio.H,
    color: 'red',
    // fontFamily: 'Poppins',
    fontSize: 16 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
