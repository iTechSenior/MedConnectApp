import { StyleSheet } from 'react-native'
import { Theme } from '../../../theme/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: 80 * Theme.Ratio.H,
  },
  logo: {
    width: 122.96 * Theme.Ratio.H,
    height: 122.96 * Theme.Ratio.H,
  },
  logoLetter: {
    marginTop: 11.6 * Theme.Ratio.H,
    width: 208.73 * Theme.Ratio.H,
    height: 16.32 * Theme.Ratio.H,
  },
  bioId: {
    width: 32.06 * Theme.Ratio.H,
    height: 32.06 * Theme.Ratio.H,
  },
  form: {
    marginTop: 60.11 * Theme.Ratio.H,
    paddingHorizontal: 30,
    // alignItems: 'center',
  },
  emailLabel: {
    fontFamily: Theme.Fonts.MuliRegular,
    fontSize: 14 * Theme.Ratio.H,
    paddingLeft: 16 * Theme.Ratio.H,
    color: '#0C72AD',
    marginBottom: 8 * Theme.Ratio.H,
  },

  textInputWrapper: {
    flexDirection: 'row',
    marginBottom: 24 * Theme.Ratio.H,
    width: '100%',
    height: 56 * Theme.Ratio.H,
    borderWidth: 1,
    paddingVertical: 17 * Theme.Ratio.H,
    paddingLeft: 16 * Theme.Ratio.H,

    borderRadius: 5,
  },

  inputStyle: {
    flex: 1,
    fontFamily: Theme.Fonts.MuliRegular,
    fontSize: 16 * Theme.Ratio.H,
  },

  eyeImg: {
    marginRight: 10 * Theme.Ratio.H,
  },

  loginBtn: {
    width: '100%',
    backgroundColor: '#0C72AD',
    height: 56 * Theme.Ratio.H,
    justifyContent: 'center',
    borderRadius: 5,
  },
  textLogIn: {
    color: 'white',
    fontFamily: Theme.Fonts.MuliSemiBold,
    fontSize: 16 * Theme.Ratio.H,
    textAlign: 'center',
  },

  bioBtn: {
    backgroundColor: '#0C72AD',
    width: 56 * Theme.Ratio.H,
    height: 56 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  switchWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: 14.5 * Theme.Ratio.H,
    marginBottom: 46.5 * Theme.Ratio.H,
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 14 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.MuliRegular,
    color: 'black',
    marginRight: 5 * Theme.Ratio.H,
  },
})

export default styles
