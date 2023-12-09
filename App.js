import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import FullPostScreen from './screens/FullPost';


const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title: 'Top News',
          headerStyle: {backgroundColor: '#b80500'},
          headerTitleStyle: { color: 'white', fontSize: 22}
          }}
        />
        <Stack.Screen 
          name="FullPost" 
          component={FullPostScreen} 
          options={{title: "Article",
          headerTitleStyle: { fontWeight: 'bold'}
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}
