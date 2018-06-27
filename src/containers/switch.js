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


class JOGO_SWITCH extends Component {

  componentWillMount(){
    const { Switch_data, actRuta } = this.props;
    Switch_data('get')
    const payload = { ruta1: 'Juegoswitch', ruta2: 'Imagenesswitch'} 
    actRuta(payload)
  }

  render() {
    const { reduSwitch } = this.props;
    return (
      <View>
        <HeaderSearch navigation={this.props.navigation} />
        {
          reduSwitch.length != 0 ?
          <ListaDeJuegos juegos={reduSwitch} navigation={this.props.navigation} />:
          <ActivityIndicator style={{top: (height/2)-(width/2)}} size={200} color='#1F5532'/>
        }
      </View>

    );
  }
}



const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = ({
  reduSwitch,
}) => ({
  reduSwitch,
})

export default connect(mapStateToProps, MapDispatchToPropsActions)(JOGO_SWITCH)
