import { StyleSheet } from 'react-native';
import { normalize } from './utils/stylesheetUtils';

/**
 * @internal
 * @hidden
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
    flex: 1,
  },
  content: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: normalize(20),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    borderRadius: normalize(10),
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: normalize(20),
  },
  btn: {
    backgroundColor: '#17c3b2',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(5),
    borderRadius: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'RedHatDisplay-Bold',
    fontSize: normalize(17),
  },
  text: {
    fontFamily: 'monospace',
    fontSize: normalize(18),
    marginVertical: normalize(10),
  },
  textInRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  virtualPOSView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff9c7',
    padding: normalize(15),
  },
  alignRight: { textAlign: 'right' },
  virtualPOSContainer: {
    width: '100%',
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default styles;
