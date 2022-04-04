import { StyleSheet, Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';

import * as COLORS from '../../constants/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: COLORS.DEFAULT_BACKGROUND_COLOR,
  },
  count: {
    fontSize: scale(26),
    fontWeight: '600',
    color: COLORS.DEFAULT_TEXT_ICON_COLOR,
  },
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    width,
    position: 'absolute',
    bottom: '3%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
  },

});

export default styles;
