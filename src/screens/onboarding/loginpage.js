// in progress comes up after clicking the logo from opening screen

import React, {useState} from "react";
import {Text, View} from 'react-native';
import styles from "../../styles/onboarding";
import RoundedTextInput from "../../components/input/roundedTextInput";
import RoundedBox from "../../components/shapes/roundedRectangle";

import { Firebase, Auth, Firestore } from './firebase.js';

const LoginPage = ({navigation}) => {
    const [email,setemail] = useState(false);
    const [pw,setpw] =useState(false);

    const handleLogin = async () => {
        try {
          const user = await Auth().signInWithEmailAndPassword(email, pw);
          console.log('Logged in user: ', user);
        } catch (error) {
          console.error('Error logging in: ', error);
        }
      };

    return(
        <View style={styles.start_container}>
            <Text style={styles.signUpHeader}>Log In</Text>
            <Text style={styles.signUpSmallHeader}>Phone Number</Text>
            <RoundedTextInput value1={email} value2={setemail} value3={'phone-pad'}/>
            <Text style={styles.signUpSmallHeader}>Password</Text>
            <RoundedTextInput value1={pw} value2={setpw} value3={'default'}/>
            <View style={{width:'100%',position:'absolute',bottom:20}}>
            <RoundedBox text='Continue' left={30} right={30} onPress={()=> {handleLogin}}/>
            <View style={{margin:10}}/>
            </View>
        </View>
    );
}

export default LoginPage;

// connect authentication services from firebase
// once connected and a user id is stored, navigate to the home page in autorized pages
