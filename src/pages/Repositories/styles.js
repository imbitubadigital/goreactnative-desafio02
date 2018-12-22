import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },
  containerForm: {
    padding: metrics.basePadding,
  },

  error: {
    color: colors.danger,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
    fontSize: 16,
  },

  form: {
    paddingBottom: metrics.basePadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.regular,
  },

  input: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    fontSize: 16,
  },

  btn: {
    paddingLeft: metrics.basePadding,
  },

  containerList: {
    padding: metrics.basePadding,
    backgroundColor: colors.lighter,
  },
});

export default styles;
