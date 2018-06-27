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


class JOGO_PS2 extends Component {

  componentWillMount(){
    const { Ps2_data, actRuta} = this.props;
    Ps2_data('get')
    const payload = { ruta1: 'Juegops2', ruta2: 'Imagenesps2'} 
    actRuta(payload)
  }

  render() {
    const { reduPs2 } = this.props;
    return (
      <View>
        <HeaderSearch navigation={this.props.navigation} />
        {
          reduPs2.length != 0 ?
          <ListaDeJuegos juegos={reduPs2} navigation={this.props.navigation} />:
          <ActivityIndicator style={{top: (height/2)-(width/2)}} size={200} color='#1F5532'/>
        }
      </View>

    );
  }
}



const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = ({
  reduPs2,
}) => ({
  reduPs2,
})

export default connect(mapStateToProps, MapDispatchToPropsActions)(JOGO_PS2)
