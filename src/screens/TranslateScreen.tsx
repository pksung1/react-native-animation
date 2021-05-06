import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useRef } from 'react'
import {Animated, Pressable, SafeAreaView, View} from 'react-native'
import {styles} from './styles'

const TranslateScreen = () => {

    const anim = useRef(new Animated.Value(0)).current
    const animScale = anim.interpolate({
        inputRange: [-200, 0, 200],
        outputRange: [0.5, 1, 5.5]
    })

    const animRotate = anim.interpolate({
        inputRange: [-200, 0, 200],
        outputRange: ['0deg', '0deg', '360deg']
    })

    useFocusEffect(() => {
        Animated.timing(anim, {
            toValue: 200,
            duration: 10000,
            useNativeDriver: true
        }).start()
        
        return () => {
            anim.setValue(0)
        }
    })

    const onClickBox = () => {
        Animated.timing(anim, {
            toValue: -200,
            duration: 5000,
            useNativeDriver: true
        }).start()
    }
    

    return (
        
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Pressable onPress={onClickBox}>
                <Animated.View style={[
                    styles.box, 
                    {
                        transform: [
                            {translateX: anim},
                            {translateY: anim},
                            {scale: animScale},
                            {rotate: animRotate}
                        ]
                    }]}></Animated.View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default TranslateScreen