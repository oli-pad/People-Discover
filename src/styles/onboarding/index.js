import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },
    innerContainer: {
        backgroundColor:'rgba(0,0,0,0.1)',
        height:'100%',
        width:'100%',
        justifyContent:'space-evenly',
        alignItems:'center'}
    ,
    spaceAroundLogo: {
        width: 139,
        height: 139,
        borderRadius: 139 / 2,
        backgroundColor: '#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        marginTop:0,
        marginBottom:65
    },
    backgroundImage:{
        alignItems:'center',
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    frontPageLogo:{
        width:80,
        height:80,
    },
    frontPageText: {
        fontSize:35,
        textAlign:"center"
    },
});

export default styles;