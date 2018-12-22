import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Repositories from '~/pages/Repositories';
import Issues from '~/pages/Issues';
// import Repositories from '~/pages/Repositories';
// import Organizations from '~/pages/Organizations';
// import { colors } from '~/styles';

const Routes = createAppContainer(createSwitchNavigator({
  Repositories,
  Issues,
}));

export default Routes;
