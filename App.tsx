import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapComponent from './src/components/MapComponent';
import LocationList from './src/components/LocationList';
import LocationDetailScreen from './src/screen/LocationDetailScreen';
import { LocationProvider } from './src/components/LocationContext'; // Importe o LocationProvider

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <LocationProvider> {/* Inclua o LocationProvider como componente raiz */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Map">
          <Stack.Screen name="Map" component={MapComponent} />
          <Stack.Screen name="Locations" component={LocationList} />
          <Stack.Screen name="LocationDetail" component={LocationDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LocationProvider>
  );
};

export default App;