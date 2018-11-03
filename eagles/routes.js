import { StackNavigator } from 'react-navigation';

// Pages
import SuaPage from './pages/SuaPage';
import Perfil from './pages/Perfil'

const Routes = StackNavigator(
    {
        Perfil: { screen: Perfil, 
            navigationOptions : {
            title: 'Perfil',
            headerStyle : {
                borderBottomWidth: 0
            }
        }
        },
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