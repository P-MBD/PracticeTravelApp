import React from "react";
import {SafeAreaView,View} from "react-native";
import Title from "../../components/Title/index";
const Home = () => {
    return (
        <SafeAreaView>
             <View>
           {/* <Title text='My First Component' /> */}
           <Title 
               title="شیراز"
               description="باغ ارم، آرامگاه حافظ"
               price="1000000"
               uri={require('../../../assets/images/shiraz.jpg')}
           />
             <Title 
               title="قزوین"
               description="چهل ستون، سعد السلطنه"
               price="1000000"
               uri={require('../../../assets/images/qazvin.jpg')}
           />
             <Title 
               title="اصفهان"
               description="پل خواجوی اصفهان"
               price="1000000"
               uri={require('../../../assets/images/esfehan.webp')}
           />
         </View>
        </SafeAreaView>
    );};
export default Home;