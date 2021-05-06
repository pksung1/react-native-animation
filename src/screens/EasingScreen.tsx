import { useFocusEffect } from '@react-navigation/native';
import React, {useRef} from 'react'
import { View, Animated,Easing } from 'react-native' 
// import { Easing } from 'react-native-reanimated';
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from './styles';

const EasingScreen = () => {

    const animBounce = useRef(new Animated.Value(1)).current;
    const animCircle = useRef(new Animated.Value(1)).current;
    const animCubic = useRef(new Animated.Value(1)).current;
    const animExp = useRef(new Animated.Value(1)).current;

    useFocusEffect(() => {
        Animated.timing(animBounce, {
            toValue: 3,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.bounce
        }).start()

        Animated.timing(animCircle, {
            toValue: 3,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.circle
        }).start()


        Animated.timing(animCubic, {
            toValue: 3,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.cubic
        }).start()

        Animated.timing(animExp, {
            toValue: 3,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.exp
        }).start()
        return () => {
            animBounce.setValue(1)
            animCircle.setValue(1)
            animCubic.setValue(1)
            animExp.setValue(1)
        }
    })

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Animated.View style={[styles.box,{backgroundColor: 'red', marginBottom: 25}, {transform: [{scale: animBounce}]}]}></Animated.View>
                <Animated.View style={[styles.box, {backgroundColor: 'blue', marginBottom: 25},{transform: [{scale: animCircle}]}]}></Animated.View>
                <Animated.View style={[styles.box, {backgroundColor: 'green', marginBottom: 25},{transform: [{scale: animCubic}]}]}></Animated.View>
                <Animated.View style={[styles.box, {backgroundColor: 'purple', marginBottom: 25},{transform: [{scale: animExp}]}]}></Animated.View>
            </View>
        </SafeAreaView>
    )
}


export default EasingScreen