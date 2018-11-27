import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

 class CounterApp extends Component {

    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>this.props.increaseCounter()}>
            <Text>Increase</Text>
            </TouchableOpacity>
            <Text>{this.props.counter}</Text>
            <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
            <Text>Decrease</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  function mapStateToProps(state) {
    return{
      counter: state.counter
    }
  }
  function mapDispatchToProps(dispatch){
    return{
      increaseCounter:()=>dispatch({type:'Increase_Counter'}),
      decreaseCounter:()=>dispatch({type:'Decrease_Counter'})
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });