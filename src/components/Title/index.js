import React, { useState} from "react";
import {Text, View, Image } from "react-native";
import styles from "./styles";

const Title = ({text, style}) => {
 
    return (
        <View>
          <Text style={[styles.title, style]}>{text}</Text>
         
        </View>
      );
  };
    Title.defaultProps = {
      text: 'Default Text'
   };
export default React.memo(Title);


