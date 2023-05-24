import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button, Headline } from 'react-native-paper';

import Input from '../components/Input';

import { useNavigation } from '@react-navigation/native';

export default class Timer extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      statusTime: '',
      switchStatus: true,
      contimer: true,
      text: '',
      wtm: 25,
      wts: 0,
      btm: 5,
      bts: 0,
      wm: 0,
      ws: 0,
      count: 0,
    }

    this.handleChange = this.handleChange.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.timer = this.timer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.settm = this.settm.bind(this)
  }

  stopTimer(){
    this.setState({
      contimer: true
    })
    clearInterval(this.ji)
  }

  resetTimer(){
    this.settm()
  }

  startTimer(){
    if (this.state.contimer) {
      this.timer()
      this.setState({
        contimer: false
      })
    }
  }

  componentWillUnmount(){
    clearInterval(this.ji)
  }

  settm(){
    if (this.state.switchStatus) {
      //console.log(this.state.wtm)
      this.setState({
        statustime: 'Mantenha-se Focado',
        wm: this.state.wtm,
        ws: this.state.wts,
      })
    } else {
      this.setState({
        statustime: 'Descanse',
        wm: this.state.btm,
        ws: this.state.bts,
      })
    }
  }

  componentDidMount(){
    this.settm()
  }

  timer(){
    this.ji = setInterval(() => {
      if (this.state.wm == 0 && this.state.ws == 0) {
        this.setState({
          switchStatus: !this.state.switchStatus
        })
        this.settm()
      } else {
        if (this.state.ws != 0) {
          this.setState({
            ws: this.state.ws - 1
          })
        } else {
          this.setState({
            wm: this.state.wm - 1,
            ws: 60
          })
        }
      }
    }, 1000);
  }

  handleChange(event, name){
    const { eventCount, target, text } = event.nativeEvent;

    if (!isNaN(text)) {
      this.setState({
        [name]: Number(text)
      }, this.settm)
    } else {
      Alert.alert('Alert',
        "Digite apenas numeros",
        [{ text: 'Ok', onPress: () => console.log('Ok') },
        ],
        { cancelable: false },
      )
    }
  }

  render(){
    return (
      <View style={styles.container}>
<View>
  <Text style={styles.statusStyle}>{this.state.statustime}</Text>
</View>
<View>
  <Text style={{textAlign: 'center', fontSize: 50, color:'#FFFFFF'}}>{this.state.wm.toString().length == 1 ? 0 + this.state.wm.toString() : this.state.wm.toString()}
  : {this.state.ws.toString().length == 1 ? 0 + this.state.ws.toString() : this.state.ws.toString()}</Text>
</View>

<View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
  <TouchableOpacity onPress={this.startTimer}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Começar</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={this.stopTimer}>
  <View style={styles.button}>
      <Text style={styles.buttonText}>Pausar</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={this.resetTimer}>
  <View style={styles.button}>
      <Text style={styles.buttonText}>Reiniciar</Text>
    </View>
  </TouchableOpacity>
</View>

<View style={{flex: 2.5}}>
  <View style={{flexDirection:'column'}}> 
  <View style={{alignItems:'center', padding: 10, justifyContent: 'center'}}><Text style={[styles.text]}>Defina o Tempo de Atividade</Text></View>
  <View style={[styles.texanin]}>
    <Text style={[styles.text]}>Minutos</Text>
    <TextInput
    keyboardType='numeric'
    value={this.state.wtm.toString()}
    onChange={(e) => this.handleChange(e, 'wtm')}
    style={[styles.textInput]}
    />

<Text style={[styles.text]}>Segundos</Text>
    <TextInput
    keyboardType='numeric'
    value={this.state.wts.toString()}
    onChange={(e) => this.handleChange(e, 'wts')}
    style={[styles.textInput]}
    />
  </View>
  
  </View>

  <View style={{flexDirection:'column'}}>
  <View style={{alignItems:'center', padding: 10, justifyContent: 'center'}}><Text style={[styles.text]}>Defina o Tempo de Pausa </Text></View>
  <View style={[styles.texanin]}>
    <Text style={[styles.text]}>Minutos</Text>
    <TextInput
    keyboardType='numeric'
    value={this.state.btm.toString()}
    onChange={(e) => this.handleChange(e, 'btm')}
    style={[styles.textInput]}
    />

<Text style={[styles.text]}>Segundos</Text>
    <TextInput
    keyboardType='numeric'
    value={this.state.bts.toString()}
    onChange={(e) => this.handleChange(e, 'bts')}
    style={[styles.textInput]}
    />
  </View>
  
  </View>


</View>
</View>   
    );
  }

  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#4682B4',
    alignItems:'center',
    justifyContent:'center'
  },
  statusStyle:{
    textAlign:'center',
    fontSize: 30,
    padding: 30,
    color: '#FFFFFF'
  },
  button:{
    borderRadius: 4,
    marginRight:5,
    marginLeft:5,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonText:{
    padding: 10,
    paddingLeft:15,
    paddingRight:15,
    color: '#4682B4'
  },
  textInput:{
    borderRadius: 4,
    borderColor: '#FFFFFF',
    color: '#4682B4',
    backgroundColor: '#FFFFFF',
    width: 70,
    paddingLeft:10,
    paddingRight:10,
    padding: 8,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 2,
    marginRight:5,
    marginLeft:5
  },
  texanin:{
    alignContent:'center',
    alignItems:'center', 
    justifyContent: 'center',
    color: '#FFFFFF',
    flexDirection:'row',
  },
  text:{
    alignContent:'center',   
    color: '#FFFFFF',
    fontSize:16
  }
});
