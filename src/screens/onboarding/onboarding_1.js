// In Progress
// onbaording_2 is sotred in the modal below 

import React, {useState} from "react";
import {Text, View,Modal} from 'react-native';
import styles from "../../styles/onboarding";
import RoundedTextInput from "../../components/input/roundedTextInput";
import RoundedRectangle from "../../components/shapes/roundedRectangle";
import ProgressBar from "../../components/shapes/progressBar";

const Onboarding_1 = ({navigation}) => {
    const [display,setdisplay] = useState(false);
    const [phone,setphone] = useState(false);
    const [code,setcode] =useState(false);

    return(
        <View style={styles.start_container}>
            <Text style={styles.signUpHeader}>Safety First</Text>
            <Text style={styles.signUpSmallHeader}>What is your phone number?</Text>
            <RoundedTextInput value1={phone} value2={setphone} value3={'phone-pad'}/>
            <Modal
                animationType = {"slide"}
                transparent = {true}
                visible={display}
                onRequestClose={() => {
                     Alert.alert('Modal has now been closed.');
                }}>
                <View style={styles.modalView}>
                    <Text style = {styles.signUpSmallHeader}>Confirm Phone Number</Text>
                    <Text style={styles.stdText}>We've text a code to your phone number,</Text>
                    <Text style={styles.stdText}>please confirm to continue</Text>
                    <RoundedTextInput value1={code} value2={setcode} value3={'phone-pad'}/>
                    <RoundedRectangle text='Continue' left={30} right={30} onPress={()=> {
                    setdisplay(false);
                    }}/>

                </View>
            </Modal>
            <View style={{position:'absolute',bottom:20}}>
            <RoundedRectangle text='Continue' left={30} right={30} onPress={()=> {
                setdisplay(true);
            }}/>
            <View style={{margin:10}}/>
            <ProgressBar one='#FFFFFF' two='#FFFFFF' three='#FFFFFF' twoBorder='rgba(82, 255, 213, 0.28)' threeBorder='rgba(82, 255, 213, 0.28)' fourBorder='rgba(82, 255, 213, 0.28)'/>
            </View>
        </View>
    );
}

export default Onboarding_1;
