import { StyleSheet } from "react-native";
const styles= StyleSheet.create({
    item:{
        fontSize: 12,
        color: 'rgba(0,0,0, 0.5)',
        fontWeight:'bold',
        marginRight: 17,
        paddingVertical: 14,
    },
    selectedItem:{
        textDecorationLine: 'underline',
        color:'#000000',
    },
    itemContainer:{
        paddingVertical:2,
    },
    selectedItemContainer:{
        borderBottomColor: '#4681A3',
        borderBottomWidth: 1,
    },
});
export default styles;