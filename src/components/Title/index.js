import React from "react";
import {Text, View, Image } from "react-native";
import styles from "./styles";

const Title = (props) => {
    return (
        <View  style={styles.content}>
          <Image source={props.uri} style={styles.image}/>
          <Text>{props.title}</Text>
          <Text>{props.description}</Text>
          <Text>{props.price}</Text>
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


