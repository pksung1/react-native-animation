import { useFocusEffect } from '@react-navigation/native';
import React, {useRef} from 'react'
import { View, Animated } from 'react-native' 
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from './styles';

const OpacityScreen = () => {

    const anim = useRef(new Animated.Value(0)).current;

    useFocusEffect(() => {
        Animated.timing(anim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false
        }).start()
        return () => {
            anim.setValue(0)
        }
    })

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Animated.View style={[styles.box, {opacity: anim}]}></Animated.View>
            </View>
        </SafeAreaView>
    )
}


export default OpacityScreen