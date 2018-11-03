import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    subHeader: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    subHeaderImage: {
        width: 99,
        height: 99,
        borderRadius: 50
    },
    subHeaderItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 20
    },
    subHeaderItemTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#141414',
    },
    subHeaderItemSubTitle: {
        fontSize: 16,
        color: '#fac917',
    },
    subHeaderItemIcon: {
        marginLeft: 20,
        width: 34,
        height: 47,
    },
    list: {
        flex: 1,
        paddingTop: 20,
    },
    listItem: {
        marginHorizontal: 20,
        marginBottom: 24,
        height: 184,
        borderRadius: 4,
        borderColor: '#dadada',
        borderWidth: 1,
    },
    listItemMap : {
        height: 120,
        width: '100%',
        backgroundColor: 'green'
    },
    listItemMapFooter : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 20
    },
    listItemMapFooterLeft: {
        flexDirection: 'column',
    },
    listItemMapFooterLeftTitle: {
        fontSize: 16,
        color: '#575757',
    },
    listItemMapFooterLeftSubtitle : {
        color: '#8d8d8d'
    },
    listItemMapFooterRight : {

    }

});
