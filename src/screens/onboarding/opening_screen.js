import React from "react";
import { ImageBackground, Text, View, Image,TouchableOpacity} from 'react-native';
import styles from '../../src/styles/onboarding'
import RoundedRectangle from "../../assets/components/roundedRectangle";

const OpeningScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage}
                    source={require('../../assets/images/PAD_MVP_IMAGES/Background_image.png')} >
                <View styles={styles.innerContainer}>
                    <View style={styles.spaceAroundLogo}>
                        <TouchableOpacity 
                            style={{alignItems:'center'}}
                            //navigation to login page
                            onPress={() => {}}>
                            <Image style={styles.frontPageLogo}
                                source={require('../../assets/images/PAD_MVP_IMAGES/Logo.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{bottom:100}}>
                        <Text style={styles.frontPageText}>Press to</Text>
                        <Text style={[styles.frontPageText,{marginBottom:10}]}>Re-connect</Text>
                    </View>
                    <RoundedRectangle text={'Create an account'} left={78} right={78} onPress={() => {}}/>
                </View>
            </ImageBackground>
        </View>
    );
}

export default HomePage;