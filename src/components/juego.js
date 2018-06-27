import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ListView,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from './../actions';
import { bindActionCreators } from 'redux'

var {height, width} = Dimensions.get('window');

class JUEGO extends React.Component {
  constructor(props) {
    super(props);
    const { reduJuego, actArrayPrincipal } = this.props;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    reduJuego.link_images ?
    this.state = {
      dataSource: ds.cloneWithRows([reduJuego.link_images, 'https://k32.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/494.jpg',
        'https://k32.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/494.jpg', 'https://k32.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/494.jpg'
      ]),
    }:
    this.state = {
      dataSource: ds.cloneWithRows(reduJuego._source.link_images),
    }
    

  }

  render() {
    const { reduJuego, actArrayPrincipal, reduRuta } = this.props;
    const descripcion = "Han pasado varios años desde que Kratos tomó  su venganza contra los Dioses Olímpicos.Habiendo sobrevivido la pelea final contra su padre Zeus, Kratos vive ahora con su joven hijo Atreus en el mundo de los Dioses Nórdicos, una tierra hostil habitada por feroces monstruos y guerreros.Kratos deberá actuar como mentor y protector de su hijo, y tendrá que dominar la ira que tuvo durante muchos años y atar cabos sueltos Esto quiere decir que la venganza de Kratos contra los dioses del Olimpo ha quedado atrás  y ahora vive como un hombre en la tierra de los dioses nórdicos que, a su vez, está llena de nuevos monstruos.  Es en este mundo desconocido donde debe luchar para  sobrevivir y enseñar a su hijo a empuñar el arco,  tal y como vimos en el primer gameplay de God of War.  Para Kratos es una segunda oportunidad, un buen ocasión para dejar atrás los errores del pasado.  Como mentor y protector de su hijo debe dominar la rabia que siempre le ha definido y así lograr  ganarse su respeto. A lo largo de todo el camino, las dudas le atormentarán.  La ambientación de God of War tiene lugar en los bosques, montañas y reinos de la tradición nórdica. Nuevos dioses, criaturas y monstruos harán acto de presencia durante la aventura de Kratos. El combate se ha vuelto mucho más físico al incorporar una cámara libre que nos permitirá vivir la acción más cerca que nunca. Será frenético pero, no hay problema, Kratos contará con una poderosa hacha, un arma brutal y llena de magia que le ayudará a realizar múltiples tareas. El hacha no sólo será su aliada en la batalla, también a la hora de explorar el terreno.";
    return (
      <View style={styles.container}>
      { 
         reduJuego.link_images ?
        <ScrollView style={{marginBottom: 20, top: 10}}>
        <View>
          <Text style={styles.id}>Id</Text>
          <Text style={styles.titleJogo}>{reduJuego.title}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.subContainer}>

            <View>
              <Image 
                source = {{uri: reduJuego.link_images}} 
                style={styles.imagen}
              />
            </View>

            <View>
              <Text style={styles.disponible}>Disponible</Text>
              <Text style={styles.dolares}>{ `$${reduJuego.price}` }</Text>
              <Text style={styles.real}>Real</Text>
              <Text style={styles.iva}>Precios no incluyen iva</Text>
            </View>
          </View>
        </View>
        <View  style={styles.listView}>
          <ListView
           
            dataSource={this.state.dataSource}
            horizontal={true}
            renderRow={(rowData) => <TouchableOpacity
                                      activeOpacity={0.5}
                                      onPress = {
                                        () => {
                                          actArrayPrincipal([reduJuego.link_images, 'https://k32.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/494.jpg',
                                          'https://k32.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/494.jpg', 'https://k32.kn3.net/taringa/4/8/7/5/3/6/5/diego1806/494.jpg'
                                          ])
                                          this.props.navigation.navigate(reduRuta.ruta2)
                                        }
                                      }
                                    >
                                      <Image 
                                        source = {{uri: rowData}}
                                        style={styles.imagenList}
                                      />
                                    </TouchableOpacity>
            }
          />
        </View>
          
      <View>
        <Text style={styles.titleOption}>Descripción</Text>
            <Text style={styles.contenidoOption}>{descripcion}</Text>
        <View style={styles.lineStyle}></View>

        <Text style={styles.titleOption}>Tipo de Juego</Text>
        <Text style={styles.contenidoOption}>Tipo de Juego</Text>
        <View style={styles.lineStyle}></View>

        <Text style={styles.titleOption}>Edade</Text>
        <Text style={styles.contenidoOption}>18</Text>
        <View style={styles.lineStyle}></View>
      </View>

      
      <View style={styles.space}></View>
      </ScrollView>:
      
      //cambios aqui
      <ScrollView style={{marginBottom: 20, top: 10}}>

        <View>
          <Text style={styles.id}>{reduJuego._id}</Text>
          <Text style={styles.titleJogo}>{reduJuego._source.title}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.subContainer}>

            <View>
              <Image 
                source = {{uri: reduJuego._source.link_images[0]}} 
                style={styles.imagen}
              />
            </View>

            <View>
              <Text style={styles.disponible}>Disponible</Text>
              <Text style={styles.dolares}>{ `$${reduJuego._source.price}` }</Text>
              <Text style={styles.real}>Real</Text>
              <Text style={styles.iva}>Precios no incluyen iva</Text>
            </View>
          </View>
        </View>
        <View  style={styles.listView}>
          <ListView
           
            dataSource={this.state.dataSource}
            horizontal={true}
            renderRow={(rowData) => <TouchableOpacity
                                      activeOpacity={0.5}
                                      onPress = {
                                        () => {
                                          actArrayPrincipal(reduJuego._source.link_images)
                                          this.props.navigation.navigate(reduRuta.ruta2)
                                        }
                                      }
                                    >
                                      <Image 
                                        source = {{uri: rowData}}
                                        style={styles.imagenList}
                                      />
                                    </TouchableOpacity>
            }
          />
        </View>
          
      <View>
        <Text style={styles.titleOption}>Descripción</Text>
            <Text style={styles.contenidoOption}>{descripcion}</Text>
        <View style={styles.lineStyle}></View>

        <Text style={styles.titleOption}>Tipo de Juego</Text>
        <Text style={styles.contenidoOption}>Tipo de Juego</Text>
        <View style={styles.lineStyle}></View>

        <Text style={styles.titleOption}>Edade</Text>
        <Text style={styles.contenidoOption}>18</Text>
        <View style={styles.lineStyle}></View>

        <Text style={styles.titleOption}>Console</Text>
        <Text style={styles.contenidoOption}>{reduJuego._type}</Text>
        <View style={styles.lineStyle}></View>
      </View>

      
      <View style={styles.space}></View>
      </ScrollView>
    }


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: width,
    backgroundColor: '#fff'
  },
  id: {
    color: 'gray',
    fontSize: Math.floor(width / 25),
    marginLeft: 10
  },
  titleJogo: {
    margin: 10,
    fontSize: Math.floor(width / 15)
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imagen: {
    width: Math.floor(width / 2),
    height: Math.floor(height/4),
    top: 5,
    margin: 10
  },
  imagenList: {
    width: Math.floor(width / 4),
    height: Math.floor(height / 10),
    top: 5,
    marginLeft: 3,
    marginRight: 5,
    marginBottom: 5
  },
  listView:{
    height: Math.floor(height / 8),
    margin: 10
  },
  disponible: {
    top: 5,
    fontSize: Math.floor(width / 22),
    backgroundColor: '#81ecec'
  },
  dolares: {
    color: 'green',
    fontSize: Math.floor(width / 9)
  },
  real: {
    color: 'gray',
    fontSize: Math.floor(width / 12)
  },
  iva: {
    color: 'gray',
    fontSize: Math.floor(width / 25)
  },
  titleOption: {
    color: 'gray',
    fontSize: Math.floor(width / 20),
    margin: 10,
    marginBottom: 5
  },
  contenidoOption: {
    color: 'gray',
    fontSize:Math.floor(width / 25),
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'gray',
    marginTop: 10,
  },
  space: {
    height: Math.floor(height / 15)
  }
})

const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

const MapStateToProps = ({
  reduJuego,
  reduRuta
}) => ({
  reduJuego,
  reduRuta
})

export default connect(MapStateToProps, MapDispatchToPropsActions)(JUEGO)

/*
mostrar asi
import ListViewDemo from './jogosList';
<ListViewDemo juegos={jogos} />
*/