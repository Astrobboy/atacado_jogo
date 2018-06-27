import React from 'react';
import {
  View,
  ListView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import * as actions from './../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


var { height, width } = Dimensions.get('window');

class ListaDeJuegos extends React.Component {
  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.juegos),
    }
  }

  componentWillReceiveProps(next_props){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({ dataSource: ds.cloneWithRows(next_props.juegos)});
  }

  render() {
    const { actJuego, reduRuta } = this.props;
      return (
        <ListView
          style={{backgroundColor: '#00000000', flex:1}}
          dataSource={this.state.dataSource}
          renderRow={
                      (rowData) => 
                        <View style={{flexDirection:'row'}}>
                        {
                          Object.keys(rowData).length >= 1 ?
                            <TouchableOpacity
                              activeOpacity={0.5}
                              onPress = {
                                () => {
                                  actJuego(rowData.archi1)
                                  this.props.navigation.navigate(reduRuta.ruta1)
                                }
                              }
                            >
                              <Image 
                                source = {{uri: rowData.archi1._source.link_images[0]}}
                                style={styles.imagen}
                              />
                                                      
                            </TouchableOpacity>
                          :
                          <View></View>
                        } 
                        {
                          Object.keys(rowData).length >= 2 ?
                            <TouchableOpacity
                              activeOpacity={0.5}
                              onPress = {
                                () => {
                                  actJuego(rowData.archi2)
                                  this.props.navigation.navigate(reduRuta.ruta1)
                                }
                              }
                            >                             
                              <Image 
                                source = {{uri: rowData.archi2._source.link_images[0]}}
                                style={styles.imagen}
                              />                             
                            </TouchableOpacity>
                         :
                          <View></View>
                        } 
                        {
                          Object.keys(rowData).length == 3 ?
                            <TouchableOpacity
                              activeOpacity={0.5}
                              onPress = {
                                () => {
                                  actJuego(rowData.archi3)
                                  this.props.navigation.navigate(reduRuta.ruta1)
                                }
                              }
                            >
                              <Image 
                                source = {{uri: rowData.archi3._source.link_images[0]}}
                                style={styles.imagen}
                              />
                            </TouchableOpacity>
                         :
                          <View></View>
                        } 
                          </View>
                    }
        />
      );
    
  }
}

const styles = StyleSheet.create({
  imagen: {
    width: width/3 - 10,
    height: width/3,
    top: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5
  }
})



const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = ({
  reduRuta,
}) => ({
  reduRuta,

})

export default connect(mapStateToProps, MapDispatchToPropsActions)(ListaDeJuegos)





/*export default createStackNavigator({
  Juego: {
    screen: Juego,
  }
}, {
  //headerMode: 'none',
});

*/

/*

mostrar asi
import ListViewDemo from './jogosList';
<ListViewDemo juegos={jogos} />
*/
