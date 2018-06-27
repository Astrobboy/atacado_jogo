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


class JOGO_GAMES extends Component {

  componentWillMount(){
    const { Games_data, actRuta } = this.props;
    Games_data('get')
    const payload = { ruta1: 'Juegogames', ruta2: 'Imagenesgames'} 
    actRuta(payload)
  }

  render() {
    const { reduGames } = this.props;
    return (
      <View>
        <HeaderSearch navigation={this.props.navigation} />
        {
          reduGames.length != 0 ?
          <ListaDeJuegos juegos={reduGames} navigation={this.props.navigation} />:
          <ActivityIndicator style={{top: (height/2)-(width/2)}} size={200} color='#1F5532'/>
        }
      </View>

    );
  }
}



const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = ({
  reduGames,
}) => ({
  reduGames,
})

export default connect(mapStateToProps, MapDispatchToPropsActions)(JOGO_GAMES)
