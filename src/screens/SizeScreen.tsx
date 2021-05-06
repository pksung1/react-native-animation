import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useRef } from 'react'
import {Animated, Pressable, SafeAreaView, View} from 'react-native'
import {styles} from './styles'

// Native에서 height값을 조정하는게 아닌 JS에서 조정하므로 useNativeDriver를 사용하면 안됨.
const SizeScreen = () => {

    const anim = useRef(new Animated.Value(200)).current
    const [isOpen, setIsOpen] = useState(false)


    const onClickBox = () => {
        console.log('onClickBox')
        if (isOpen) {
            Animated.timing(anim, {
                toValue: 250,
                duration: 1000,
                useNativeDriver: false
            }).start()
            setIsOpen(false)
        } else {
            Animated.timing(anim, {
                toValue: 50,
                duration: 1000,
                useNativeDriver: false
            }).start()
            setIsOpen(true)
        }
    }
    
    

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Pressable onPress={onClickBox}>
                <Animated.View style={[
                    styles.box, {height: anim}]}></Animated.View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default SizeScreen