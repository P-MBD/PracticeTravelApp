import React, {useEffect, useState} from "react";
import {Text, View, Image } from "react-native";
import styles from "./styles";

const Title = ({text}) => {
    const [stateText, setText] = useState('Default state');

    useEffect(()=>{
      console.log('HELLO USEEFFECT');
      setText(text);
    },[text]);

    const onTextPress =() => {
        setText('Updated state');
    }
    return (
        <View>
          <Text onPress={onTextPress} style={styles.title}>{stateText}</Text>
         
        </View>
      );
}
export default Title;
// const Title = ({text}) => {
//     console.log('text:>>', text);
//     return(
//         <Text style={styles.title}> {text} </Text>
//         );};
// Title.defaultProps = {
//     text: 'Default Text'
// };


