// holds all the screens that the user can use before they become a registered user.

// module imports below

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screen imports below
import OpeningScreen from '../screens/onboarding/opening_screen';

const PreAuthStack = createStackNavigator();

const PreAuthNavigator = props => {
    return (
      <NavigationContainer>
        <PreAuthStack.Navigator>
          <PreAuthStack.Screen name="OpeningScreen" component={OpeningScreen} options={{headerShown: false}}/>
        </PreAuthStack.Navigator>
      </NavigationContainer>
    );
  };

export default PreAuthNavigator;