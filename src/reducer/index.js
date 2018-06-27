import { combineReducers } from 'redux';

import { 
    reduBusqueda,
    reduData,
    reduPS4,
    reduPS3,
    reduPs2,
    reduXboxOne,
    reduSwitch,
    reduXbox360,
    reduDS3,
    reduPsvita,
    reduWii,
    reduWiiu,
    reduGames,
    reduAccion,
    reduRPG,
    reduHistoria,
    reduFPS,
    reduShooter,
    reduThird,
    reduJuego,
    reduScrollPrimario,
    reduScrollSecundario,
    reduArrayPrimario,
    reduArraySecundario,
    reduRuta
}
from './reducerFull';

//se combina los reducers

export default combineReducers({
    reduBusqueda,
    reduData,
    reduPS4,
    reduPS3,
    reduPs2,
    reduXboxOne,
    reduSwitch,
    reduXbox360,
    reduDS3,
    reduPsvita,
    reduWii,
    reduWiiu,
    reduGames,
    reduAccion,
    reduRPG,
    reduHistoria,
    reduFPS,
    reduShooter,
    reduThird,
    reduJuego,
    reduScrollPrimario,
    reduScrollSecundario,
    reduArrayPrimario,
    reduArraySecundario,
    reduRuta
})