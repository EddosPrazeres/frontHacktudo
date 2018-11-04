import { StackNavigator } from 'react-navigation';

// Pages
import SuaPage from './pages/SuaPage';
import Perfil from './pages/Perfil'
import CriarRota from './pages/CriarRota'
import Step2 from './pages/CriarRota/Step2'
import Step3 from './pages/CriarRota/Step3'

const Routes = StackNavigator(
    {
        CriarRota : { 
            screen: CriarRota,
            navigationOptions : {
                title: 'Criar Rota',
            }
        },
        Step2 : { 
            screen: Step2,
            navigationOptions : {
                title: 'Criar Rota',
            }
        },
        Step3 : { 
            screen: Step3,
            navigationOptions : {
                title: 'Criar Rota',
            }
        },
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