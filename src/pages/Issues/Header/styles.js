import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 54 + getStatusBarHeight(),

    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: metrics.basePadding,
    alignItems: 'center',
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.darker,
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    color: colors.dark,
  },
});

export default styles;
