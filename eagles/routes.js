import { StackNavigator } from 'react-navigation';

// Pages
import SuaPage from './pages/SuaPage';

const Routes = StackNavigator(
  {
    SuaPage: { screen: SuaPage },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FFF',
      },
    },
  },
);

export default Routes;