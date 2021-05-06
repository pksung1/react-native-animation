import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useMemo, useState } from 'react'
import { useRef } from 'react';
import {StyleSheet, Text, View, Dimensions, Image, Pressable, ImageBackground, Animated} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { createSharedElementStackNavigator, SharedElement } from "react-navigation-shared-element";
import { TransitionSpec } from 'react-navigation-stack/lib/typescript/src/vendor/types';


const Slide = () => {
    const carousel = useRef(null)
    const navigation = useNavigation()
    
    const {width, height} = useMemo(() => Dimensions.get('screen'), [Dimensions])
    
    const [datas, setDatas] = useState([
        {id: 'data1', uri: 'https://image.shutterstock.com/z/stock-photo-tree-arranged-as-a-green-graph-on-soil-background-csr-sustainable-development-planting-a-tree-182134277.jpg'},
        {id: 'data2', uri: 'https://image.shutterstock.com/z/stock-photo-aerial-view-of-solar-panel-photovoltaic-alternative-electricity-source-concept-of-sustainable-1450558175.jpg'},
        {id: 'data3', uri: 'https://image.shutterstock.com/z/stock-photo-wooden-bridge-over-the-rainforest-in-southeast-asia-441692386.jpg'}
    ])


    const RenderSlide = (data: any) => {
        const {item} = data;

        const onPress = () => {
            navigation.push('SharedElementDetail', {item})
        }
        return (
            <Pressable onPress={onPress}>
                <View style={styles.sliderItem}>
                    <SharedElement id={`item.${item.id}.photo`} style={{flex: 1}}>
                        <ImageBackground source={{uri: item.uri}} style={{flex: 1}} resizeMode={'cover'}>
                            <View style={{backgroundColor: 'red'}}>
                                <Text style={{color: '#fff'}}>Hello World</Text>
                            </View>
                        </ImageBackground>
                    </SharedElement>
                </View>
            </Pressable>
        )
    }

    return (
        <View style={{height: height * 0.6}}>
            <Carousel
                ref={carousel}
                data={datas}
                renderItem={RenderSlide}
                sliderWidth={width / 0.6}
                itemWidth={width * 0.6}
                containerCustomStyle={styles.slider}
            />
        </View>
    )
}

const SharedElementDetail = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {item}: any = route.params

    const onPress = () => {
        navigation.goBack()
    }
    return (
        <View style={{flex: 1, backgroundColor: 'transition'}}>
            <Pressable onPress={onPress} style={{flex: 1}}>
                <SharedElement id={`item.${item.id}.photo`} style={{flex: 1}}>
                    <ImageBackground source={{uri: item.uri}} style={{flex: 1}} resizeMode={'cover'}>
                        <View style={{backgroundColor: 'red'}}>
                            <Text style={{color: '#fff'}}>Hello World</Text>
                        </View>
                    </ImageBackground>
                </SharedElement>
            </Pressable>
            <Text>Shared Element Detail</Text>
        </View>
    )
}


SharedElementDetail.sharedElements = (navigation: any, otherNavigation: any, showing: any) => {
    const {item} = navigation.route.params;
    return [`item.${item.id}.photo`];
  };

const SharedElementExample = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Slide />
        </SafeAreaView>
    )
}


const SharedElementStack = createSharedElementStackNavigator()

const SharedElementExampleNavigator = () => {

    const iosTransitionSpec: TransitionSpec = {
        animation: "spring",
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          delay: 1000,
          overshootClamping: true,
          restDisplacementThreshold: 10,
          restSpeedThreshold: 10,
        },
      };

    const anim = useRef(new Animated.Value(0)).current

    return (
        <SharedElementStack.Navigator
            mode="modal"
            headerMode="none"
            screenOptions={{
                // Enable gestures if you want. I disabled them because of my card style interpolator opacity animation
                gestureEnabled: false,
                transitionSpec: {
                  open: iosTransitionSpec,
                  close: iosTransitionSpec,
                },
                // interpolator 확인필요
                // cardStyleInterpolator: (ref) => anim = ref.current.progress,
            }}
        >
            <SharedElementStack.Screen name="SharedElementExample" component={SharedElementExample}></SharedElementStack.Screen>
            <SharedElementStack.Screen name="SharedElementDetail" component={SharedElementDetail}></SharedElementStack.Screen>
        </SharedElementStack.Navigator>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    slider: {
        backgroundColor: 'yellow'
        
    },
    sliderItem: {
        backgroundColor: 'red',
        height: '100%'
    }
})

export default SharedElementExampleNavigator