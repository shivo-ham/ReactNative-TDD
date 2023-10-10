import { View, TouchableOpacity, Animated, Easing, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { Colors } from '../../config/appConstants';
const styles = StyleSheet.create({

    bubbleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: Colors.white
    },
    single_tab: {
        height: 46,
        width: 46,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: 'row',
        borderRadius: 23
    },
})
class TabBar extends Component {
    constructor(props) {
        super(props);
        this.tabValue = new Animated.Value(1)
        this.textOpacity = new Animated.Value(1)
        this.rotateIcon = new Animated.Value(0)
    }

    componentDidUpdate(prevProps) {
        this.animateTabWidth()
    }

    animateTabWidth = () => {
        this.tabValue.setValue(0)
        this.textOpacity.setValue(0)
        this.rotateIcon.setValue(0)
        Animated.sequence([
            Animated.parallel([
                Animated.timing(this.tabValue, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                    easing: Easing.linear
                }),
                Animated.timing(this.textOpacity, {
                    toValue: 1,
                    duration: 550,
                    useNativeDriver: true,
                    easing: Easing.linear
                })
            ]),
            Animated.timing(this.rotateIcon, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
                easing: Easing.linear
            })
        ]).start()
    }

    render() {
        const {
            navigation,
            tabBarHeight,
        } = this.props

        const { routes, index } = this.props.state

        return (
            <View style={[styles.bubbleContainer, { height: tabBarHeight || 70,bottom:0, paddingBottom: 6, position: 'absolute', width: '100%', alignSelf: 'center' }]}>
                {routes.map((route, routeIndex) => {
                    const isFocused = index === routeIndex;
                    const tintColor = isFocused ? Colors.white : Colors.gray
                    const backgroundColor = isFocused ? Colors.red : Colors.gray
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <Animated.View key={routeIndex}>
                            <TouchableOpacity
                                style={isFocused && [styles.single_tab, { backgroundColor: backgroundColor, elevation: isFocused?5:0 }] || {}}
                                onPress={onPress}
                                onLongPress={onLongPress}
                            >
                                <Animated.View style={isFocused && { opacity: this.textOpacity }}>
                                    <Image
                                        source={route.params.icon}
                                        resizeMode={'center'}
                                        style={{ tintColor: tintColor, height: 22, width: 22 }}
                                    />
                                </Animated.View>
                            </TouchableOpacity>
                        </Animated.View>
                    )
                })}
            </View>
        )
    }
}

export default TabBar