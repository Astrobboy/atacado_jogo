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


class JOGO_XBOXONE extends Component {

  componentWillMount(){
    const { XboxOne_data, actRuta } = this.props;
    XboxOne_data('get')
    const payload = { ruta1: 'Juegoxboxone', ruta2: 'Imagenesxboxone'} 
    actRuta(payload)
  }

  render() {
    const { reduXboxOne } = this.props;
    return (
      <View>
        <HeaderSearch navigation={this.props.navigation} />
        {
          reduXboxOne.length != 0 ?
          <ListaDeJuegos juegos={reduXboxOne} navigation={this.props.navigation} />:
          <ActivityIndicator style={{top: (height/2)-(width/2)}} size={200} color='#1F5532'/>
        }
      </View>

    );
  }
}



const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = ({
  reduXboxOne,
}) => ({
  reduXboxOne,
})

export default connect(mapStateToProps, MapDispatchToPropsActions)(JOGO_XBOXONE)
