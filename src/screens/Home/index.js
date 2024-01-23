import React from "react";
import {SafeAreaView,View} from "react-native";
import Title from "../../components/Title/index";
import TitleClass from "../..//components/Title/classComponent";
const Home = () => {
    return (
        <SafeAreaView>
             <View>
                   <Title text='My First Component' /> 
                   <TitleClass text="Class Component" />
              </View>
        </SafeAreaView>
    );};
export default Home;