import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },

  containerButtons: {
    padding: metrics.basePadding,
    backgroundColor: colors.lighter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttomStart: {
    borderTopLeftRadius: metrics.baseRadius * 2,
    borderBottomLeftRadius: metrics.baseRadius * 2,
    backgroundColor: colors.regular,
    flexBasis: '33.33%',
    paddingVertical: metrics.basePadding / 2.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttom: {
    backgroundColor: colors.regular,
    flexBasis: '33.33%',
    paddingVertical: metrics.basePadding / 2.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttomEnd: {
    borderTopRightRadius: metrics.baseRadius * 2,
    borderBottomRightRadius: metrics.baseRadius * 2,
    backgroundColor: colors.regular,
    flexBasis: '33.33%',
    paddingVertical: metrics.basePadding / 2.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButtom: {
    textAlign: 'center',
    color: colors.dark,
  },

  textButtomActive: {
    textAlign: 'center',
    color: colors.lighter,
  },

  circle: {
    color: colors.white,
    marginHorizontal: metrics.baseMargin / 2,
  },

  error: {
    color: colors.danger,
    textAlign: 'center',
    padding: metrics.basePadding,
    fontWeight: 'bold',
    fontSize: 17,
  },

  containerList: {
    padding: metrics.basePadding,
    backgroundColor: colors.lighter,
  },
});

export default styles;
