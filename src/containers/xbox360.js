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


class JOGO_XBOX360 extends Component {

  componentWillMount(){
    const { Xbox360_data, actRuta } = this.props;
    Xbox360_data('get')
    const payload = { ruta1: 'Juegoxbox360', ruta2: 'Imagenesxbox360'} 
    actRuta(payload)
  }

  render() {
    const { reduXbox360 } = this.props;
    return (
      <View>
        <HeaderSearch navigation={this.props.navigation} />
        {
          reduXbox360.length != 0 ?
          <ListaDeJuegos juegos={reduXbox360} navigation={this.props.navigation} />:
          <ActivityIndicator style={{top: (height/2)-(width/2)}} size={200} color='#1F5532'/>
        }
      </View>

    );
  }
}



const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = ({
  reduXbox360,
}) => ({
  reduXbox360,
})

export default connect(mapStateToProps, MapDispatchToPropsActions)(JOGO_XBOX360)
