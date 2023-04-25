import Screen1 from './screen1'
import Screen2 from './screen2'
import Screen3 from './screen3'
import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="log in"
          component={Screen1}
          options={{title: 'Register'}}/>

        <Stack.Screen
          name="list"
          component={Screen2}
          options={{title: 'User list'}}/>

        <Stack.Screen
          name="details"
          component={Screen3}
          options={{title: 'Details'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App;
