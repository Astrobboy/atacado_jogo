import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView
} from 'react-native';
import { DrawerItems, createDrawerNavigator, Icon, createStackNavigator } from 'react-navigation';

//views
import JUEGO from './../components/juego';
import ListImageJogo from './../components/listImageJogo';

import HOME from './../containers/home'

import JOGO_PS4 from './../containers/ps4';
import JOGO_PS3 from './../containers/ps3';
import JOGO_PS2 from './../containers/ps2';
import JOGO_XBOXONE from './../containers/xboxone';
import JOGO_XBOX360 from './../containers/xbox360';
import JOGO_PSVITA from './../containers/psvita';
import JOGO_SWITCH from './../containers/switch';
import JOGO_DS3 from './../containers/ds3';
import JOGO_WII from './../containers/wii';
import JOGO_WIIU from './../containers/wiiu';
import JOGO_GAMES from './../containers/games';




var {height, width} = Dimensions.get('window');

const isAndroid = Platform.OS


class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    header: null
  };

  render() {
    
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <HOME navigation={this.props.navigation}/>
        
        
      </SafeAreaView>
    );
  }
}

class PS4 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'PS4',
    header: null
  };
  
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <JOGO_PS4 navigation={this.props.navigation} />
        
      </SafeAreaView>
    );
  }
}


class PS3 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'PS3',
    header: null
  };
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <JOGO_PS3 navigation={this.props.navigation} />
        
      </SafeAreaView>
    );
  }
}

class PS2 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'PS2',
    header: null
  };
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <JOGO_PS2 navigation={this.props.navigation} />
        
      </SafeAreaView>
    );
  }
}

class Xbox_One extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Xbox One',
    header: null
  };
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        
        <JOGO_XBOXONE navigation={this.props.navigation} />
        
      </SafeAreaView>
    );
  }
}

class Xbox_360 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Xbox 360',
    header: null
  };
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <JOGO_XBOX360 navigation={this.props.navigation} />
        
      </SafeAreaView>
    );
  }
}

class Ps_vita extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Xbox 360',
    header: null
  };
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <JOGO_PSVITA navigation={this.props.navigation} />
        
      </SafeAreaView>
    );
  }
}

class Switch extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Switch',
    header: null
  };
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <JOGO_SWITCH navigation={this.props.navigation} />
        
      </SafeAreaView>
    );
  }
}

class DS3 extends React.Component {
  static navigationOptions = {
    drawerLabel: '3DS',
    header: null
  };
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <JOGO_DS3 navigation={this.props.navigation} />
        
      </SafeAreaView>
    );
  }
}

class Wii extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Wii',
    header: null
  };
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <JOGO_WII navigation={this.props.navigation} />
        
      </SafeAreaView>
    );
  }
}

class Wiiu extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Wii u',
    header: null
  };
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <JOGO_WIIU navigation={this.props.navigation} />
        
      </SafeAreaView>
    );
  }
}

class Games extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Games',
    header: null
  };
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        <JOGO_GAMES navigation={this.props.navigation} />
        
      </SafeAreaView>
    );
  }
}


class Juego extends React.Component {
  static navigationOptions = {
    header: null
  };


  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <JUEGO navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

class IMAGENES extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#00000000'}]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor = "blue"
        />
        <ListImageJogo navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}


export const MyApp =  createDrawerNavigator(
  {
    Home: {
      screen: createStackNavigator({
        Home: {
          screen: Home
        },
        Juego: {
          screen: Juego
        },
        Imagenes: {
          screen: IMAGENES
        }
      },{
        headerMode: 'screen'
      })
    },
    PS4: {
      screen: createStackNavigator({
        Homeps4: {
          screen: PS4
        },
        Juegops4: {
          screen: Juego
        },
        Imagenesps4: {
          screen: IMAGENES
        }
      }, {
        headerMode: 'screen'
      }) ,
    },
    PS3: {
      screen: createStackNavigator({
        Homeps3: {
          screen: PS3
        },
        Juegops3: {
          screen: Juego
        },
        Imagenesps3: {
          screen: IMAGENES
        }
      }, {
        headerMode: 'screen'
      })
    },
    PS2: {
      screen: createStackNavigator({
        Homeps2: {
          screen: PS2
        },
        Juegops2: {
          screen: Juego
        },
        Imagenesps2: {
          screen: IMAGENES
        }
      }, {
        headerMode: 'screen'
      })
    },
    Ps_vita: {
      screen: createStackNavigator({
        Homepsvita: {
          screen: Ps_vita
        },
        Juegopsvita: {
          screen: Juego
        },
        Imagenespsvita: {
          screen: IMAGENES
        }
      }, {
        headerMode: 'screen'
      })
    },
    Xbox_One: {
      screen: createStackNavigator({
        Homexboxone: {
          screen: Xbox_One
        },
        Juegoxboxone: {
          screen: Juego
        },
        Imagenesxboxone: {
          screen: IMAGENES
        }
      }, {
        headerMode: 'screen'
      })
    },
    Xbox_360: {
      screen: createStackNavigator({
        Homexbox360: {
          screen: Xbox_360
        },
        Juegoxbox360: {
          screen: Juego
        },
        Imagenesxbox360: {
          screen: IMAGENES
        }
      }, {
        headerMode: 'screen'
      })
    },
    Switch: {
      screen: createStackNavigator({
        Homeswitch: {
          screen: Switch
        },
        Juegoswitch: {
          screen: Juego
        },
        Imagenesswitch: {
          screen: IMAGENES
        }
      }, {
        headerMode: 'screen'
      })
    },
    _3DS: {
      screen: createStackNavigator({
        Homeds3: {
          screen: DS3
        },
        Juegods3: {
          screen: Juego
        },
        Imagenesds3: {
          screen: IMAGENES
        }
      }, {
        headerMode: 'screen'
      })
    },
    Wii: {
      screen: createStackNavigator({
        Homewii: {
          screen: Wii
        },
        Juegowii: {
          screen: Juego
        },
        Imageneswii: {
          screen: IMAGENES
        }
      }, {
        headerMode: 'screen'
      })
    },
    Wiiu: {
      screen: createStackNavigator({
        Homewiiu: {
          screen: Wiiu
        },
        Juegowiiu: {
          screen: Juego
        },
        Imageneswiiu: {
          screen: IMAGENES
        }
      }, {
        headerMode: 'screen'
      })
    },
    Games: {
      screen: createStackNavigator({
        Homegames: {
          screen: Games
        },
        Juegogames: {
          screen: Juego
        },
        Imagenesgames: {
          screen: IMAGENES
        }
      }, {
        headerMode: 'screen'
      })
    }
  },
  {
    // define customComponent here
    contentComponent: props => 
    <ScrollView style={{backgroundColor:'#fff'}}>
    <View style={styles.contDra}>
      <Image
      source = {require('./../image/escondido.jpeg')}
      style={height <= 650 && width <= 450 ? 
        {width: Math.floor(width-70), height: Math.floor(height/3), top: 23}:
        {width: Math.floor((width/2+20)), height: Math.floor(height/4), top: 23}
      } />

    </View>
    <View style={{top: 18}}>
      <DrawerItems {...props} />
      <View style={{top:10, height:10}}></View>
    </View>
    
      
    </ScrollView>
  }
);




const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#dcdde1',
		//top: 10,
		alignItems: 'center',
	},
  contDra : {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 5
  },
  space: {
    height: Math.floor(height / 15)
  }
})





    /*{
      archi1 : {
        "title": "JOGO  ARK SURVIVAL EVOLVED PS4",
        "description": "null",
        "link_images": [
          "http://images.atacadogames.com/g/IMG_442978_1.JPG",
          "http://images.atacadogames.com/g/IMG_442978_3.JPG",
          "http://images.atacadogames.com/g/IMG_442978_2.JPG",
          "http://images.atacadogames.com/g/IMG_442978_4.JPG"
        ],
        "price": "51.90",
        "stock": "True",
        "console": "PS4"
      },
      archi2 : {
        "title": "JOGO  BLACKGUARDS 2  PS4",
        "description": "null",
        "link_images": [
          "http://images.atacadogames.com/g/IMG_457002_7.JPG",
          "http://images.atacadogames.com/g/IMG_457002_1.JPG",
          "http://images.atacadogames.com/g/IMG_457002_3.JPG",
          "http://images.atacadogames.com/g/IMG_457002_4.JPG",
          "http://images.atacadogames.com/g/IMG_457002_2.JPG",
          "http://images.atacadogames.com/g/IMG_457002_5.JPG"
        ],
        "price": "19.90",
        "stock": "True",
        "console": "PS4"
      },
      archi3 : {
        "title": "JOGO  YS VII LACRIMOSA OF DANA PS VITA",
        "description": "null",
        "link_images": [
          "http://images.atacadogames.com/g/IMG_443159_5.JPG",
          "http://images.atacadogames.com/g/IMG_443159_1.JPG",
          "http://images.atacadogames.com/g/IMG_443159_3.JPG",
          "http://images.atacadogames.com/g/IMG_443159_4.JPG",
          "http://images.atacadogames.com/g/IMG_443159_2.JPG"
        ],
        "price": "28.90",
        "stock": "True",
        "console": "PS VITA"
      }
    }, */ 