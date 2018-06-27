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


class JOGO_PSVITA extends Component {

  componentWillMount(){
    const { Psvita_data, actRuta } = this.props;
    Psvita_data('get')
    const payload = { ruta1: 'Juegopsvita', ruta2: 'Imagenespsvita'} 
    actRuta(payload)
  }

  render() {
    const { reduPsvita } = this.props;
    return (
      <View>
        <HeaderSearch navigation={this.props.navigation} />
        {
          reduPsvita.length != 0 ?
          <ListaDeJuegos juegos={reduPsvita} navigation={this.props.navigation} />:
          <ActivityIndicator style={{top: (height/2)-(width/2)}} size={200} color='#1F5532'/>
        }
      </View>

    );
  }
}



const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = ({
  reduPsvita,
}) => ({
  reduPsvita,
})

export default connect(mapStateToProps, MapDispatchToPropsActions)(JOGO_PSVITA)
