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


class JOGO_WIIU extends Component {

  componentWillMount(){
    const { Wiiu_data, actRuta } = this.props;
    Wiiu_data('get')
    const payload = { ruta1: 'Juegowiiu', ruta2: 'Imageneswiiu'} 
    actRuta(payload)  
  }

  render() {
    const { reduWiiu } = this.props;
    return (
      <View>
        <HeaderSearch navigation={this.props.navigation} />
        {
          reduWiiu.length != 0 ?
          <ListaDeJuegos juegos={reduWiiu} navigation={this.props.navigation} />:
          <ActivityIndicator style={{top: (height/2)-(width/2)}} size={200} color='#1F5532'/>
        }
      </View>

    );
  }
}



const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = ({
  reduWiiu,
}) => ({
  reduWiiu,
})

export default connect(mapStateToProps, MapDispatchToPropsActions)(JOGO_WIIU)
