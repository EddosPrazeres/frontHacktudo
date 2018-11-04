import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    container: {
        paddingVertical: 20,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    typeEvent: {
        borderColor: '#dedede',
        borderBottomWidth: 1,
        marginHorizontal: 20,
        paddingBottom: 10,
    }, 
    typeEventTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#575757',
        marginBottom: 20,
    },
    typeDefault: {
        borderColor: '#dedede',
        borderBottomWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 20
    },
    typeDefaulTitle: {
        borderColor: '#dedede',
        borderBottomWidth: 1,
        paddingBottom: 20,
        fontSize: 16,
        fontWeight: '600',
        color: '#575757',
    },
    loginScreenSurprise:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#6800c1',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    loginScreenSkip:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'transparent',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    surprise: {
        color: 'white',
        textAlign: 'center'
    },
    skip: {
        color: '#8d8d8d',
        textAlign: 'center',
        textDecorationLine: "underline",
    },
    typeToggle: {
        borderColor: '#dedede',
        borderBottomWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    SecondView: {
        paddingTop: 56,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 0,
    },
    SecondViewImage: {
        width: 320,
        height: 230,
        marginBottom: 16,
    },
    SecondViewTitle: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 24,
        color: '#141414'
    },
    SecondViewText: {
        textAlign: 'center', 
        fontSize: 24,
        color: '#141414'

    }

});
