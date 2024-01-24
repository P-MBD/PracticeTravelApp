import React from "react";
import {SafeAreaView,View} from "react-native";
import Title from "../../components/Title/index";
import styles from "./styles";

const Home = () => {
    return (
        <SafeAreaView>
             <View style={styles}>
                   <Title text='Where do' style={{fontWeight: 'normal'}} /> 
                   <Title text="you want to go" />
                   <Title text="Explore Attractions" style={styles.subtitle} />
              </View>
        </SafeAreaView>
    );};
export default React.memo(Home);