import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';

class Screen1 extends React.Component {
    render(){
        return(<View style={styles.centered}>
          <View style={styles.colored}>
            <Text style={styles.rt}>G</Text>
            <Text style={styles.rt}>E</Text>
            <Text style={styles.rt}>O</Text>
            <Text style={styles.rt}>A</Text>
            <Text style={styles.rt}>P</Text>
            <Text style={styles.rt}>P</Text>
          </View>
          <Pressable style={styles.buttons} onPress={() => this.register()}>
            <Text style={styles.text}>GO!</Text>
          </Pressable>
        </View>)
    }
    register = () => {
      // console.log(this.props.route.params.addUser);
      // this.props.route.params.addUser(this.name,this.pass)
      this.props.navigation.navigate('list')
    }
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    margin: 12,
    alignSelf: 'center',
    borderColor: 'gainsboro',
    borderBottomWidth: .5,
    backgroundColor: '#2B4AAA',
    paddingLeft: 10,
    color: 'white'
  },
  centered: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#2A4494'
  },
  colored: {
    flex: .65,
    backgroundColor: '#2B4494',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 220
  },
  rt: {
    fontSize: 170,
    color: 'rgba(255 255 255 / .1)',
    fontWeight: 'bold',
    lineHeight: 170,
    height: 120
  },
  buttons: {
    paddingLeft: 0,
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'center',
    borderColor: 'white',
    borderBottomWidth: .5,
    borderTopWidth: .5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'gainsboro',
    fontWeight: 'bold',
    letterSpacing: 10.7,
    fontSize: 32
  }
});

export default Screen1;