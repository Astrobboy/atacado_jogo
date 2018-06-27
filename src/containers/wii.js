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


class JOGO_WII extends Component {

  componentWillMount(){
    const { Wii_data, actRuta } = this.props;
    Wii_data('get')
    const payload = { ruta1: 'Juegowii', ruta2: 'Imageneswii'} 
    actRuta(payload)
  }

  render() {
    const { reduWii } = this.props;
    return (
      <View>
        <HeaderSearch navigation={this.props.navigation} />
        {
          reduWii.length != 0 ?
          <ListaDeJuegos juegos={reduWii} navigation={this.props.navigation} />:
          <ActivityIndicator style={{top: (height/2)-(width/2)}} size={200} color='#1F5532'/>
        }
      </View>

    );
  }
}



const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = ({
  reduWii,
}) => ({
  reduWii,
})

export default connect(mapStateToProps, MapDispatchToPropsActions)(JOGO_WII)
