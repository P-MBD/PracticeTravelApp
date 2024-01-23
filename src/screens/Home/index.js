import React, { useEffect, useState } from "react";
import {SafeAreaView,View} from "react-native";
import Title from "../../components/Title/index";
import TitleClass from "../..//components/Title/classComponent";
const Home = () => {
    const[title, setTitle] = useState('My First Component');
    useEffect(()=> {
        setTimeout(()=>{
            setTitle('Updated prop text');
        },3000);
    },[]);
    return (
        <SafeAreaView>
             <View>
                   <Title text={title} /> 
                   <TitleClass text="Class Component" />
              </View>
        </SafeAreaView>
    );};
export default Home;