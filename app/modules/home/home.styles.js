/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    /* COMMON */
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    pageHeader: {
        backgroundColor: '#006093',
        height: 48,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF'
    },
    pageContent: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        padding: 8
    },
    searchButton: {
        width: 48,
        height: 48,
        position: 'absolute',
        right: 16,
        top: 24
    },

    listHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 8
    },
    subList: {
        marginTop: 4,
        marginBottom: 4
    },
    subListHeader: {
        fontSize: 14,
        color: '#999'
    },
    listItem: {
        marginTop: 2,
        marginBottom: 2
    }
});
