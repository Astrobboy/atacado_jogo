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


class JOGO_DS3 extends Component {

  componentWillMount(){
    const { DS3_data, actRuta } = this.props;
    DS3_data('get')
    const payload = { ruta1: 'Juegods3', ruta2: 'Imagenesds3'} 
    actRuta(payload)
  }

  render() {
    const { reduDS3 } = this.props;
    return (
      <View>
        <HeaderSearch navigation={this.props.navigation} />
        {
          reduDS3.length != 0 ?
          <ListaDeJuegos juegos={reduDS3} navigation={this.props.navigation} />:
          <ActivityIndicator style={{top: (height/2)-(width/2)}} size={200} color='#1F5532'/>
        }
      </View>

    );
  }
}



const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = ({
  reduDS3,
}) => ({
  reduDS3,
})

export default connect(mapStateToProps, MapDispatchToPropsActions)(JOGO_DS3)
