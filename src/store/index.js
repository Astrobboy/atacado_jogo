import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducer';

const initialState = {
  reduBusqueda: [{
      archi1: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://k32.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/494.jpg']
        },
        "price": "51.90",
        "stock": "True",
        "console": "PS4"
      },
      archi2: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://k34.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/59A.jpg']
        },
        "price": "19.90",
        "stock": "True",
        "console": "PS4"
      },
      archi3: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://k40.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/9E4.jpg']
        },
        "price": "28.90",
        "stock": "True",
        "console": "PS VITA"
      }
    },
    {
      archi1: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://k36.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/8BC.jpg']
        },
        "price": "28.90",
        "stock": "True",
        "console": "PS VITA"
      },
      archi2: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://k30.kn3.net/taringa/C/8/D/E/9/C/CarloMancilla/D08.jpg']
        },
        "price": "28.90",
        "stock": "True",
        "console": "PS VITA"
      },
      archi3: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://tuswallpapersgratis.com/wp-content/uploads/2013/10/Battlefield-4-HD-Wallpaper.jpg']
        },
        "price": "28.90",
        "stock": "True",
        "console": "PS VITA"
      }
    },
    {
      archi1: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['http://www.gifs-animados.es/wallpapers/wallpapers/juegos/wallpaper-juegos-439388.jpg']
        },
        "price": "28.90",
        "stock": "True",
        "console": "PS VITA"
      },
      archi2: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://k42.kn3.net/taringa/5/0/0/6/E/A/WallpaperHD/1A7.jpg']
        },
        "price": "28.90",
        "stock": "True",
        "console": "PS VITA"
      },
      archi3: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://www.wallpaperup.com/uploads/wallpapers/2015/07/07/745760/0843aca521287474856a8d3e8fcf868c-700.jpg']
        },
        "price": "28.90",
        "stock": "True",
        "console": "PS VITA"
      }
    },
    {
      archi1: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://k32.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/494.jpg']
        },
        "price": "51.90",
        "stock": "True",
        "console": "PS4"
      },
      archi2: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://k34.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/59A.jpg']
        },
        "price": "19.90",
        "stock": "True",
        "console": "PS4"
      },
      archi3: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://k40.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/9E4.jpg']
        },
        "price": "28.90",
        "stock": "True",
        "console": "PS VITA"
      }
    }, {
      archi1: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://k36.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/8BC.jpg']
        },
        "price": "28.90",
        "stock": "True",
        "console": "PS VITA"
      },
      archi2: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://k30.kn3.net/taringa/C/8/D/E/9/C/CarloMancilla/D08.jpg']
        },
        "price": "28.90",
        "stock": "True",
        "console": "PS VITA"
      },
      archi3: {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "_source": {
          "link_images": ['https://tuswallpapersgratis.com/wp-content/uploads/2013/10/Battlefield-4-HD-Wallpaper.jpg']
        },
        "price": "28.90",
        "stock": "True",
        "console": "PS VITA"
      }
    },

  ],
  reduData: [],
  reduPS4: [],
  reduPS3: [],
  reduPs2: [],
  reduXboxOne: [],
  reduSwitch: [],
  reduXbox360: [],
  reduDS3: [],
  reduPsvita: [],
  reduWii: [],
  reduWiiu: [],
  reduGames: [],
  reduAccion: {},
  reduRPG: {}, 
  reduHistoria: {},
  reduFPS: {},
  reduShooter: {},
  reduThird: {},
  reduJuego: {},
  reduScrollPrimario: {},
  reduScrollSecundario: {},
  reduArrayPrimario: {},
  reduArraySecundario: {},
  reduRuta: { ruta1 : 'Juego', ruta2: 'Imagenes' }
}


//se crea el store global de la app con los reducer y un estado inicial
 
export const store = createStore(reducers, initialState, applyMiddleware(thunk));