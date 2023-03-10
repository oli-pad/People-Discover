// holds all the screens that the user can use before they become a registered user.

// module imports below

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from "@react-navigation/native-stack";

// Home screens imports below
import OpeningScreen from '../screens/onboarding/opening_screen';

// Log in screens imports below
import LoginPage from '../screens/onboarding/loginpage';

// Registration screens imports below
import Onboarding_1 from '../screens/onboarding/onboarding_1';
import Onboarding_3 from '../screens/onboarding/onboarding_3';
import Onboarding_4 from '../screens/onboarding/onboarding_4';
import Onboarding_5 from '../screens/onboarding/onboarding_5';


const PreAuthStack = createNativeStackNavigator();

const PreAuthNavigator = props => {
    return (
        <NavigationContainer>
            <PreAuthStack.Navigator>
                <PreAuthStack.Screen name="OpeningScreen" component={OpeningScreen} options={{headerShown: false}}/>
                <PreAuthStack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
                <PreAuthStack.Screen name="Onboarding_1" component={Onboarding_1} options={{headerShown: false}}/>
                <PreAuthStack.Screen name="Onboarding_3" component={Onboarding_3} options={{headerShown: false}}/>
                <PreAuthStack.Screen name="Onboarding_4" component={Onboarding_4} options={{headerShown: false}}/>
                <PreAuthStack.Screen name="Onboarding_5" component={Onboarding_5} options={{headerShown: false}}/>
            </PreAuthStack.Navigator>
        </NavigationContainer>
    );
};

export default PreAuthNavigator;
