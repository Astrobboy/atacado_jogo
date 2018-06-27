

// nombre del tipo de reducer
export const BUSQUEDA = 'BUSQUEDA';
//consolas
export const DATA = 'DATA';
export const PS4 = 'PS4';
export const PS3 = 'PS3';
export const PS2 = 'PS2';
export const XBOX_ONE = 'XBOX_ONE';
export const XBOX360 = 'XBOX360';
export const SWITCH = 'SWITCH';
export const DS3 = 'DS3';
export const PS_VITA = 'PS_VITA';
export const WII = 'WII';
export const WII_U = 'WII_U';
export const GAMES = 'GAMES';
//tipo
export const ACCION = 'ACCION';
export const RPG = 'RPG';
export const HISTORIA = 'HISTORIA';
export const FPS = 'FPS';
export const SHOOTER = 'SHOOTER';
export const THIRD_PERSON = 'THIRD_PERSON';
export const JUEGO = 'JUEGO';

//ruta actions
export const SELECT_ROUTE = 'SELECT_ROUTE';

//pruebas
export const SCROLL_PRINCIPAL = 'SCROLL_PRINCIPAL';
export const SCROLL_SECUNDARIO = 'SCROLL_SECUNDARIO';
export const ARRAY_PRINCIPAL = 'ARRAY_PRINCIPAL';
export const ARRAY_SECUNDARIO = 'ARRAY_SECUNDARIO';



//actions se disparán según el dato que será actualizado

export const actBusqueda = payload => ({ type: BUSQUEDA, payload});

//consolas actions
export const actData = payload => ({ type: DATA, payload});
export const actPs4 = payload => ({ type: PS4, payload});
export const actPs3 = payload => ({ type:PS3, payload});
export const actPs2 = payload => ({ type:PS2, payload});
export const actXboxOne = payload => ({ type: XBOX_ONE, payload});
export const actXbox360 = payload => ({ type: XBOX360, payload});
export const actSwitch = payload => ({ type: SWITCH, payload});
export const actDS3 = payload => ({ type: DS3, payload});
export const actPsvita = payload => ({type: PS_VITA , payload});
export const actWii = payload => ({type: WII , payload});
export const actWiiu = payload => ({type: WII_U , payload});
export const actGames = payload => ({type: GAMES , payload});

//type jogo actions
export const actAccion = payload => ({ type: ACCION, payload});
export const actRPG = payload => ({ type: RPG, payload});
export const actHistoria = payload => ({ type: HISTORIA, payload});
export const actFSP = payload => ({ type: FPS, payload});
export const actShooter = payload => ({ type: FPS, payload});
export const actThirdPerson = payload => ({ type: THIRD_PERSON, payload});

//action route
export const actRuta = payload => ({type: SELECT_ROUTE , payload});

//action jogo selected
export const actJuego = payload => ({ type: JUEGO, payload});

//action pruebas
export const actSrollPrincipal = payload => ({ type: SCROLL_PRINCIPAL, payload});
export const actSrollSecundario = payload => ({ type: SCROLL_SECUNDARIO, payload});
export const actArrayPrincipal = payload => ({ type: ARRAY_PRINCIPAL, payload});
export const actArraySecundario = payload => ({ type: ARRAY_SECUNDARIO, payload});


const url_elastic = 'http://10.10.10.35:5001'

//action con peticiones (usar redux-thunk)
export const XboxOne_data = (payload) => {

  if (payload == 'get') {
    return dispatch => {
      const url = `${url_elastic}/xboxone`
      //activa en el estado un indicador de busqueda de datos
      return fetch(url).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actXboxOne(value))
      });
      return;
    };
  } else {
    return dispatch => {
      const url = `${url_elastic}/xboxone`

      //activa en el estado un indicador de busqueda de datos
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: payload
        })
      }).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actXboxOne(value))
      });
      return;
    };
  }
};

export const Xbox360_data = (payload) => {

  if (payload == 'get') {
    return dispatch => {
      const url = `${url_elastic}/xbox360`
      //activa en el estado un indicador de busqueda de datos
      return fetch(url).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actXbox360(value))
      });
      return;
    };
  } else {
    return dispatch => {
      const url = `${url_elastic}/xbox360`

      //activa en el estado un indicador de busqueda de datos
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: payload
        })
      }).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actXbox360(value))
      });
      return;
    };
  };
};


export const Ps4_data = (payload) => {
  if (payload == 'get'){
    return dispatch => {
      const url = `${url_elastic}/ps4`
      //activa en el estado un indicador de busqueda de datos
      return fetch(url).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actPs4(value))
      });
      return;
    };
  }else{
    return dispatch => {
      const url = `${url_elastic}/ps4`

      //activa en el estado un indicador de busqueda de datos
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: payload
        })
      }).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actPs4(value))
      });
      return;
    };
  }
  
};


export const Ps3_data = (payload) => {

  if (payload == 'get') {
    return dispatch => {
      const url = `${url_elastic}/ps3`
      //activa en el estado un indicador de busqueda de datos
      return fetch(url).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actPs3(value))
      });
      return;
    };
  } else {
    return dispatch => {
      const url = `${url_elastic}/ps3`

      //activa en el estado un indicador de busqueda de datos
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: payload
        })
      }).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actPs3(value))
      });
      return;
    };
  };
  
};

export const Ps2_data = (payload) => {

  if (payload == 'get') {
    return dispatch => {
      const url = `${url_elastic}/ps2`
      //activa en el estado un indicador de busqueda de datos
      return fetch(url).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actPs2(value))
      });
      return;
    };
  } else {
    return dispatch => {
      const url = `${url_elastic}/ps2`

      //activa en el estado un indicador de busqueda de datos
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: payload
        })
      }).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actPs2(value))
      });
      return;
    };
  };
};



export const Switch_data = (payload) => {

  if (payload == 'get') {
    return dispatch => {
      const url = `${url_elastic}/switch`
      //activa en el estado un indicador de busqueda de datos
      return fetch(url).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actSwitch(value))
      });
      return;
    };
  } else {
    return dispatch => {
      const url = `${url_elastic}/switch`

      //activa en el estado un indicador de busqueda de datos
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: payload
        })
      }).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actSwitch(value))
      });
      return;
    };
  };
};


export const DS3_data = (payload) => {

  if (payload == 'get') {
    return dispatch => {
      const url = `${url_elastic}/ds3`
      //activa en el estado un indicador de busqueda de datos
      return fetch(url).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actDS3(value))
      });
      return;
    };
  } else {
    return dispatch => {
      const url = `${url_elastic}/ds3`

      //activa en el estado un indicador de busqueda de datos
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: payload
        })
      }).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actDS3(value))
      });
      return;
    };
  };
};


export const Psvita_data = (payload) => {

  if (payload == 'get') {
    return dispatch => {
      const url = `${url_elastic}/psvita`
      //activa en el estado un indicador de busqueda de datos
      return fetch(url).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actPsvita(value))
      });
      return;
    };
  } else {
    return dispatch => {
      const url = `${url_elastic}/psvita`

      //activa en el estado un indicador de busqueda de datos
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: payload
        })
      }).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actPsvita(value))
      });
      return;
    };
  };
};

export const Wii_data = (payload) => {

  if (payload == 'get') {
    return dispatch => {
      const url = `${url_elastic}/wii`
      //activa en el estado un indicador de busqueda de datos
      return fetch(url).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actWii(value))
      });
      return;
    };
  } else {
    return dispatch => {
      const url = `${url_elastic}/wii`

      //activa en el estado un indicador de busqueda de datos
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: payload
        })
      }).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actWii(value))
      });
      return;
    };
  };
};

export const Wiiu_data = (payload) => {

  if (payload == 'get') {
    return dispatch => {
      const url = `${url_elastic}/wiiu`
      //activa en el estado un indicador de busqueda de datos
      return fetch(url).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actWiiu(value))
      });
      return;
    };
  } else {
    return dispatch => {
      const url = `${url_elastic}/wiiu`

      //activa en el estado un indicador de busqueda de datos
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: payload
        })
      }).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actWiiu(value))
      });
      return;
    };
  };
};



export const Games_data = (payload) => {

  if (payload == 'get') {
    return dispatch => {
      const url = `${url_elastic}/games`
      //activa en el estado un indicador de busqueda de datos
      return fetch(url).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actGames(value))
      });
      return;
    };
  } else {
    return dispatch => {
      const url = `${url_elastic}/games`

      //activa en el estado un indicador de busqueda de datos
      return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: payload
        })
      }).then(
        data => (data.json())
      ).then(value => {
        //dispara y almacena el array
        //modificar el estado con el resultado de la promise(fetch)
        dispatch(actGames(value))
      });
      return;
    };
  };
};

export const Busqueda_data = (payload) => {

  return dispatch => {
    const url = `${url_elastic}/todo`
    
    //activa en el estado un indicador de busqueda de datos
    return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: payload
        })
    }).then(
      data => (data.json())
    ).then(value => {
      //dispara y almacena el array
      //modificar el estado con el resultado de la promise(fetch)
      dispatch(actBusqueda(value))
    });
    return;
  };
};