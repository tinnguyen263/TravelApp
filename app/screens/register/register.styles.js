import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    /* COMMON */
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: 300
    },
    twoColumnLayout: {
        flexDirection: 'row'
    },
    column: {
        flex: 1
    },
    confirm: {
        paddingLeft: 4,
        paddingRight: 4,
        margin: 8
    }
});

export default styles;