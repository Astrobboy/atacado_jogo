import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ListView,
  Text,
  ScrollView,
  Animated,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from './../actions';
import { bindActionCreators } from 'redux';

var {height, width} = Dimensions.get('window');

class ListImageJogo extends React.Component {

  handleScroll = event => {
    const { actSrollPrincipal, actSrollSecundario } = this.props;
    actSrollPrincipal(event.nativeEvent.contentOffset.x)
    actSrollSecundario(event.nativeEvent.contentOffset.x/2);
    //console.log(event.nativeEvent.contentOffset.x);

  }
  


  render() {
    const { reduJuego, reduScrollSecundario, reduArrayPrimario } = this.props;
    return (
      <View style={styles.container}>
          <ScrollView 
            horizontal={true}
            pagingEnabled= {true}
            onScroll={event => {this.handleScroll(event)}}
          >
          {
            reduArrayPrimario.map(imagen => ( < Image
                                      key={imagen}
                                      source = {{uri: imagen}}
                                      style={styles.imagenList}
                                      />
                                        
                                  ))
            }
          </ScrollView>
          <View style={[styles.imagenpeque, {right:0 , left:0 - reduScrollSecundario }]}>
            <ScrollView 
                horizontal={true}
                //onScroll={event => {this.handleScroll(event)}}
              >
            {
              reduArrayPrimario.map(imagen => ( < TouchableOpacity
                                                    key={imagen}
                                                    activeOpacity={0.5}
                                                    onPress = {
                                                      () => {
                                                       console.log('hola')
                                                      }
                                                    }
                                                  >   
                                                    < Image
                                                      
                                                      source = {{uri: imagen}}
                                                      style={styles.imagenList2}
                                                    />
                                                  </TouchableOpacity>
                            ))
            }
            </ScrollView>
          </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: width,
    backgroundColor: '#fff'
  },
  imagenList: {
    width: Math.floor(width),
    height: Math.floor(height),
    top: 5,
    marginBottom: 5
  },
  imagenpeque:{
    top: Math.floor(width/2 + height/2),
    position: 'absolute'
  },
  imagenList2: {
    width: Math.floor(width/2),
    height: Math.floor(height/6),
    top: 5,
    marginBottom: 5
  }
})

const MapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

const MapStateToProps = ({
  reduJuego,
  reduScrollPrimario,
  reduScrollSecundario,
  reduArrayPrimario,
  //reduArraySecundario
}) => ({
  reduJuego,
  reduScrollPrimario,
  reduScrollSecundario,
  reduArrayPrimario,
  //reduArraySecundario
})

export default connect(MapStateToProps, MapDispatchToPropsActions)(ListImageJogo)

/*
<View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource2}
            horizontal={true}
            renderRow={(rowData) => <Image 
                                      source = {{uri: rowData}}
                                      style={styles.imagenList}
                                    />
                                    
            }
          />

      </View>
      */





      
     