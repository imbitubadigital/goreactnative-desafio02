import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: metrics.baseMargin,
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    width: 44,
    height: 44,
    marginRight: metrics.baseMargin,
    borderRadius: 22,
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  details: {
    flex: 1,
    minWidth: 100,
    marginRight: metrics.baseMargin,
  },
});

export default styles;
