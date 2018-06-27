import React, { Component } from 'react';
import {
  Dimensions,
  View,
  ActivityIndicator
} from 'react-native';
//views
import HeaderSearch from './../components/search';
import ListaDeJuegos from './../components/jogosList';


//redux
import * as actions from './../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const { width, height } = Dimensions.get(`window`);


class JOGO_PS3 extends Component {

  componentWillMount(){
    const { Ps3_data, actRuta } = this.props;
    Ps3_data('get')
    const payload = { ruta1: 'Juegops3', ruta2: 'Imagenesps3'} 
    actRuta(payload)
  }

  render() {
    const { reduPS3 } = this.props;
    return (
      <View>
        <HeaderSearch navigation={this.props.navigation} />
        {
          reduPS3.length != 0 ?
          <ListaDeJuegos juegos={reduPS3} navigation={this.props.navigation} />:
          <ActivityIndicator style={{top: (height/2)-(width/2)}} size={200} color='#1F5532'/>
        }
      </View>

    );
  }
}



const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = ({
  reduPS3,
}) => ({
  reduPS3,
})

export default connect(mapStateToProps, MapDispatchToPropsActions)(JOGO_PS3)
