import React, { Component } from 'react';
import {
  Dimensions,
  View,
  StyleSheet
} from 'react-native';
//views
import HeaderSearch from './../components/search';
import ListaDeJuegos from './../components/jogosList';


//redux
import * as actions from './../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

var {height, width} = Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get(`window`).width;


class HOME extends Component {

  componentWillMount(){
    const { actRuta } = this.props;
    const payload = { ruta1: 'Juego', ruta2: 'Imagenes'} 
    actRuta(payload)
  }

  render() {
    const { reduBusqueda } = this.props;
    
    return (
      <View>
        <HeaderSearch navigation={this.props.navigation} />
        {
          <ListaDeJuegos juegos={reduBusqueda} navigation={this.props.navigation} />

        }
        <View style={styles.space}></View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  space: {
    height: Math.floor(height / 20)
  }
})



const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = ({
  reduBusqueda,
}) => ({
  reduBusqueda,
})

export default connect(mapStateToProps, MapDispatchToPropsActions)(HOME)
