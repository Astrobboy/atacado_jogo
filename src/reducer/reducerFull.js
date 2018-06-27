import {
  BUSQUEDA,
  DATA,
  PS4,
  PS3,
  PS2,
  XBOX_ONE,
  XBOX360,
  SWITCH,
  DS3,
  PS_VITA,
  WII,
  WII_U,
  GAMES,
  ACCION,
  RPG,
  HISTORIA,
  FPS,
  SHOOTER,
  THIRD_PERSON,
  JUEGO,
  SCROLL_PRINCIPAL,
  SCROLL_SECUNDARIO,
  ARRAY_PRINCIPAL,
  ARRAY_SECUNDARIO,
  SELECT_ROUTE
} from './../actions';

//se importan las const y según sea el tipo de acción que dispare redux
//está hará una copia del estado actualizando solo los datos de ese reducer
// y luego retornara el estado


export const reduArrayPrimario = (state = {}, action) => {
  switch (action.type) {
    case ARRAY_PRINCIPAL:
      return action.payload

    default:
      return state;
  }
}

export const reduArraySecundario = (state = {}, action) => {
  switch (action.type) {
    case ARRAY_SECUNDARIO:
      return action.payload

    default:
      return state;
  }
}


export const reduScrollPrimario = (state = {}, action) => {
  switch (action.type) {
    case SCROLL_PRINCIPAL:
      return action.payload

    default:
      return state;
  }
}

export const reduScrollSecundario = (state = {}, action) => {
  switch (action.type) {
    case SCROLL_SECUNDARIO:
      return action.payload

    default:
      return state;
  }
}

export const reduJuego = (state = {}, action) => {
  switch (action.type) {
    case JUEGO:
      return action.payload

    default:
      return state;
  }
}



export const reduBusqueda = (state = [], action) => {
  switch (action.type) {
    case BUSQUEDA:
      return action.payload

    default:
      return state;
  }
}

export const reduData = (state = {}, action) => {
  switch (action.type) {
    case DATA:
      return action.payload

    default:
      return state;
  }

}

export const reduPS4 = (state = [], action) => {
  switch (action.type) {
    case PS4:
      return action.payload

    default:
      return state;
  }

}

export const reduPS3 = (state = {}, action) => {
  switch (action.type) {
    case PS3:
      return action.payload

    default:
      return state;
  }

}



export const reduXboxOne = (state = {}, action) => {
  switch (action.type) {
    case XBOX_ONE:
      return action.payload

    default:
      return state;
  }

}

export const reduXbox360 = (state = {}, action) => {
  switch (action.type) {
    case XBOX360:
      return action.payload

    default:
      return state;
  }

}

export const reduSwitch = (state = {}, action) => {
  switch (action.type) {
    case SWITCH:
      return action.payload

    default:
      return state;
  }

}


export const reduDS3 = (state = {}, action) => {
  switch (action.type) {
    case DS3:
      return action.payload

    default:
      return state;
  }

}

export const reduAccion = (state = {}, action) => {
  switch (action.type) {
    case ACCION:
      return action.payload

    default:
      return state;
  }

}

export const reduRPG = (state = {}, action) => {
  switch (action.type) {
    case RPG:
      return action.payload

    default:
      return state;
  }

}

export const reduHistoria = (state = {}, action) => {
  switch (action.type) {
    case HISTORIA:
      return action.payload

    default:
      return state;
  }

}

export const reduFPS = (state = {}, action) => {
  switch (action.type) {
    case FPS:
      return action.payload

    default:
      return state;
  }

}

export const reduShooter = (state = {}, action) => {
  switch (action.type) {
    case SHOOTER:
      return action.payload

    default:
      return state;
  }

}

export const reduThird = (state = {}, action) => {
  switch (action.type) {
    case THIRD_PERSON:
      return action.payload

    default:
      return state;
  }

}

export const reduPs2 = (state = {}, action) => {
  switch (action.type) {
    case PS2:
      return action.payload

    default:
      return state;
  }

}

export const reduPsvita = (state = {}, action) => {
  switch (action.type) {
    case PS_VITA:
      return action.payload

    default:
      return state;
  }

}

export const reduWii = (state = {}, action) => {
  switch (action.type) {
    case WII:
      return action.payload

    default:
      return state;
  }

}

export const reduWiiu = (state = {}, action) => {
  switch (action.type) {
    case WII_U:
      return action.payload

    default:
      return state;
  }

}

export const reduGames = (state = {}, action) => {
  switch (action.type) {
    case GAMES:
      return action.payload

    default:
      return state;
  }

}

export const reduRuta = (state = {}, action) => {
  switch (action.type) {
    case SELECT_ROUTE:
      return action.payload

    default:
      return state;
  }

}
