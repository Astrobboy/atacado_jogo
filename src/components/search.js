import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import SearchHeader from 'react-native-search-header';
import Icon from 'react-native-vector-icons/Ionicons';

import * as actions from './../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import ListViewDemo from './jogosList';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

class HeaderSearch extends Component {
  constructor(props) {
    super(props);
  }

  prueba = () => {
    this.props.navigation.openDrawer();
  }


  render() {
    const juego = [{
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

    ]
    const {
      Busqueda_data,
      actBusqueda,
      reduRuta,
      Ps4_data,
      Ps3_data,
      Ps2_data,
      Psvita_data,
      Switch_data,
      XboxOne_data,
      Xbox360_data,
      Wii_data,
      Wiiu_data,
      DS3_data,
      Games_data
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={styles.status} />
        <View style={styles.header}>
          <TouchableOpacity style={{marginLeft: 10}} onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="ios-menu" color="#fff" size={40} />
          </TouchableOpacity>
          <Text style={styles.label}> Jogos </Text>
          <TouchableOpacity style={{marginRight: 10}} onPress={() => this.searchHeader.show()}>
            <Icon name="ios-search" color="#fff"size={40} />
          </TouchableOpacity>
        </View>
        <View style={styles.lineStyle}></View>
         
        <SearchHeader
          enableSuggestion={true}
          dropShadowed= {true}
          autoFocus={true}
          topOffset={22}
          suggestionHistoryEntryRollOverCount={5}
          placeholder = 'Search...'
          entryAnimation = 'from-right-side'
          ref={(searchHeader) => {
            this.searchHeader = searchHeader;
          }}
          onGetAutocompletions={async (text) => {
            if (text) {
              const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                method: `get`
              });
              const data = await response.json();
              return data[1];
            } else {
              return [];
            }
          }}
          onSearch={(text) => {
              if (reduRuta.ruta1 == 'Juego') {
                Busqueda_data(text.nativeEvent.text)
              } else if(reduRuta.ruta1 == 'Juegops4') {
                Ps4_data(text.nativeEvent.text)
              } else if (reduRuta.ruta1 == 'Juegops3') {
                Ps3_data(text.nativeEvent.text)
              } else if (reduRuta.ruta1 == 'Juegops2') {
                Ps2_data(text.nativeEvent.text)
              } else if (reduRuta.ruta1 == 'Juegopsvita') {
                Psvita_data(text.nativeEvent.text)
              } else if (reduRuta.ruta1 == 'Juegoswitch') {
                Switch_data(text.nativeEvent.text)
              } else if (reduRuta.ruta1 == 'Juegoxboxone') {
                XboxOne_data(text.nativeEvent.text)
              } else if (reduRuta.ruta1 == 'Juegoxbox360') {
                Xbox360_data(text.nativeEvent.text)
              } else if (reduRuta.ruta1 == 'Juegowii') {
                Wii_data(text.nativeEvent.text)
              } else if (reduRuta.ruta1 == 'Juegowiiu') {
                Wiiu_data(text.nativeEvent.text)
              } else if (reduRuta.ruta1 == 'Juegods3') {
                DS3_data(text.nativeEvent.text)
              } else if (reduRuta.ruta1 == 'Juegogames') {
                Games_data(text.nativeEvent.text)
              }
             
            } 
          }
          onHide ={ () => {
            if (reduRuta.ruta1 == 'Juego') {
              actBusqueda(juego)
            } else if (reduRuta.ruta1 == 'Juegops4') {
              Ps4_data('get')
            } else if (reduRuta.ruta1 == 'Juegops3') {
              Ps3_data('get')
            } else if (reduRuta.ruta1 == 'Juegops2') {
              Ps2_data('get')
            } else if (reduRuta.ruta1 == 'Juegopsvita') {
              Psvita_data('get')
            } else if (reduRuta.ruta1 == 'Juegoswitch') {
              Switch_data('get')
            } else if (reduRuta.ruta1 == 'Juegoxboxone') {
              XboxOne_data('get')
            } else if (reduRuta.ruta1 == 'Juegoxbox360') {
              Xbox360_data('get')
            } else if (reduRuta.ruta1 == 'Juegowii') {
              Wii_data('get')
            } else if (reduRuta.ruta1 == 'Juegowiiu') {
              Wiiu_data('get')
            } else if (reduRuta.ruta1 == 'Juegods3') {
              DS3_data('get')
            } else if (reduRuta.ruta1 == 'Juegogames') {
              Games_data('get')
            }
            
          }}
         
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1F5532' //fondo bajo header
  },
  status: {
    zIndex: 10,
    elevation: 2,
    width: DEVICE_WIDTH,
    height: 25,
    backgroundColor: '#1F5532' //fondo arriba del header
    //'#009432'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_WIDTH,
    height: 54,
    marginBottom: 6,
    backgroundColor: '#009432'
  },
  label: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: `600`,
    textAlign: `left`,
    marginVertical: 8,
    paddingVertical: 3,
    color: `#fff`,
    backgroundColor: `transparent`,
    textAlign: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 40,
    marginTop: 40,
    borderRadius: 2,
    backgroundColor: `#ff5722`
  },
  lineStyle: {
    width: DEVICE_WIDTH,
    borderWidth: 0.5,
    borderColor: 'gray',
    //marginTop: 30,
  }
});

const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);


const mapStateToProps = ({
  reduRuta,
}) => ({
  reduRuta,
})

export default connect(mapStateToProps, MapDispatchToPropsActions)(HeaderSearch)