import { StyleSheet } from "react-native";
import colors from './../../constants/colors';

const styles = StyleSheet.create({
    /* COMMON */
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hyperLink: {
        color: colors.primaryColor,
        textDecorationLine: 'underline'
    },

    /* Logo and App name */
    logoAndAppName: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24
    },
    logo: {
        width: 48,
        height: 48
    },
    appName: {
        height: 48,
        fontSize: 36,
        lineHeight: 48,
        fontFamily: 'Montserrat-Bold',
        marginLeft: 16,
        color: colors.primaryColor
    },

    form: {
        width: 250
    },

    forgotPasswordText: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8
    },
    registerText: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 16
    }
});

export default styles;