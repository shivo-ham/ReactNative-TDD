import { Platform } from 'react-native';
const IS_ANDROID = Platform.OS === 'android';
export function getInputRangeFromIndexes (range, index, carouselProps) {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    let inputRange = [];

    for (let i = 0; i < range.length; i++) {
        inputRange.push((index - range[i]) * sizeRef);
    }

    return inputRange;
}
export function defaultScrollInterpolator (index, carouselProps) {
    const range = [1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = [0, 1, 0];

    return { inputRange, outputRange };
}
export function defaultAnimatedStyles (index, animatedValue, carouselProps) {
    let animatedOpacity = {};
    let animatedScale = {};

    if (carouselProps.inactiveSlideOpacity < 1) {
        animatedOpacity = {
            opacity: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [carouselProps.inactiveSlideOpacity, 1]
            })
        };
    }

    if (carouselProps.inactiveSlideScale < 1) {
        animatedScale = {
            transform: [{
                scale: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [carouselProps.inactiveSlideScale, 1]
                })
            }]
        };
    }

    return {
        ...animatedOpacity,
        ...animatedScale
    };
}

export function shiftAnimatedStyles (index, animatedValue, carouselProps) {
    let animatedOpacity = {};
    let animatedScale = {};
    let animatedTranslate = {};

    if (carouselProps.inactiveSlideOpacity < 1) {
        animatedOpacity = {
            opacity: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [carouselProps.inactiveSlideOpacity, 1]
            })
        };
    }

    if (carouselProps.inactiveSlideScale < 1) {
        animatedScale = {
            scale: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [carouselProps.inactiveSlideScale, 1]
            })
        };
    }

    if (carouselProps.inactiveSlideShift !== 0) {
        const translateProp = carouselProps.vertical ? 'translateX' : 'translateY';
        animatedTranslate = {
            [translateProp]: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [carouselProps.inactiveSlideShift, 0]
            })
        };
    }

    return {
        ...animatedOpacity,
        transform: [
            { ...animatedScale },
            { ...animatedTranslate }
        ]
    };
}

export function stackScrollInterpolator (index, carouselProps) {
    const range = IS_ANDROID ?
        [1, 0, -1, -2, -3] :
        [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}
export function stackAnimatedStyles (index, animatedValue, carouselProps, cardOffset) {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    const card1Scale = 0.9;
    const card2Scale = 0.8;

    cardOffset = !cardOffset && cardOffset !== 0 ? 18 : cardOffset;

    const getTranslateFromScale = (cardIndex, scale) => {
        const centerFactor = 1 / scale * cardIndex;
        const centeredPosition = -Math.round(sizeRef * centerFactor);
        const edgeAlignment = Math.round((sizeRef - (sizeRef * scale)) / 2);
        const offset = Math.round(cardOffset * Math.abs(cardIndex) / scale);

        return IS_ANDROID ?
            centeredPosition - edgeAlignment - offset :
            centeredPosition + edgeAlignment + offset;
    };

    const opacityOutputRange = carouselProps.inactiveSlideOpacity === 1 ? [1, 1, 1, 0] : [1, 0.75, 0.5, 0];

    return IS_ANDROID ? {
        opacity: animatedValue.interpolate({
            inputRange: [-3, -2, -1, 0],
            outputRange: opacityOutputRange.reverse(),
            extrapolate: 'clamp'
        }),
        transform: [{
            scale: animatedValue.interpolate({
                inputRange: [-2, -1, 0, 1],
                outputRange: [card2Scale, card1Scale, 1, card1Scale],
                extrapolate: 'clamp'
            })
        }, {
            [translateProp]: animatedValue.interpolate({
                inputRange: [-3, -2, -1, 0, 1],
                outputRange: [
                    getTranslateFromScale(-3, card2Scale),
                    getTranslateFromScale(-2, card2Scale),
                    getTranslateFromScale(-1, card1Scale),
                    0,
                    sizeRef * 0.5
                ],
                extrapolate: 'clamp'
            })
        }]
    } : {
        zIndex: carouselProps.data.length - index,
        opacity: animatedValue.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: opacityOutputRange,
            extrapolate: 'clamp'
        }),
        transform: [{
            scale: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2],
                outputRange: [card1Scale, 1, card1Scale, card2Scale],
                extrapolate: 'clamp'
            })
        }, {
            [translateProp]: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2, 3],
                outputRange: [
                    -sizeRef * 0.5,
                    0,
                    getTranslateFromScale(1, card1Scale),
                    getTranslateFromScale(2, card2Scale),
                    getTranslateFromScale(3, card2Scale)
                ],
                extrapolate: 'clamp'
            })
        }]
    };
}

export function tinderScrollInterpolator (index, carouselProps) {
    const range = IS_ANDROID ?
        [1, 0, -1, -2, -3] :
        [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}
export function tinderAnimatedStyles (index, animatedValue, carouselProps, cardOffset) {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    const mainTranslateProp = carouselProps.vertical ? 'translateY' : 'translateX';
    const secondaryTranslateProp = carouselProps.vertical ? 'translateX' : 'translateY';

    const card1Scale = 0.96;
    const card2Scale = 0.92;
    const card3Scale = 0.88;

    const peekingCardsOpacity = IS_ANDROID ? 0.92 : 1;

    cardOffset = !cardOffset && cardOffset !== 0 ? 9 : cardOffset;

    const getMainTranslateFromScale = (cardIndex, scale) => {
        const centerFactor = 1 / scale * cardIndex;
        return -Math.round(sizeRef * centerFactor);
    };

    const getSecondaryTranslateFromScale = (cardIndex, scale) => {
        return Math.round(cardOffset * Math.abs(cardIndex) / scale);
    };

    return IS_ANDROID ? {
        opacity: animatedValue.interpolate({
            inputRange: [-3, -2, -1, 0, 1],
            outputRange: [0, peekingCardsOpacity, peekingCardsOpacity, 1, 0],
            extrapolate: 'clamp'
        }),
        transform: [{
            scale: animatedValue.interpolate({
                inputRange: [-3, -2, -1, 0],
                outputRange: [card3Scale, card2Scale, card1Scale, 1],
                extrapolate: 'clamp'
            })
        }, {
            rotate: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '22deg'],
                extrapolate: 'clamp'
            })
        }, {
            [mainTranslateProp]: animatedValue.interpolate({
                inputRange: [-3, -2, -1, 0, 1],
                outputRange: [
                    getMainTranslateFromScale(-3, card3Scale),
                    getMainTranslateFromScale(-2, card2Scale),
                    getMainTranslateFromScale(-1, card1Scale),
                    0,
                    sizeRef * 1.1
                ],
                extrapolate: 'clamp'
            })
        }, {
            [secondaryTranslateProp]: animatedValue.interpolate({
                inputRange: [-3, -2, -1, 0],
                outputRange: [
                    getSecondaryTranslateFromScale(-3, card3Scale),
                    getSecondaryTranslateFromScale(-2, card2Scale),
                    getSecondaryTranslateFromScale(-1, card1Scale),
                    0
                ],
                extrapolate: 'clamp'
            })
        }]
    } : {
        zIndex: carouselProps.data.length - index,
        opacity: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: [0, 1, peekingCardsOpacity, peekingCardsOpacity, 0],
            extrapolate: 'clamp'
        }),
        transform: [{
            scale: animatedValue.interpolate({
                inputRange: [0, 1, 2, 3],
                outputRange: [1, card1Scale, card2Scale, card3Scale],
                extrapolate: 'clamp'
            })
        }, {
            rotate: animatedValue.interpolate({
                inputRange: [-1, 0],
                outputRange: ['-22deg', '0deg'],
                extrapolate: 'clamp'
            })
        }, {
            [mainTranslateProp]: animatedValue.interpolate({
                inputRange: [-1, 0, 1, 2, 3],
                outputRange: [
                    -sizeRef * 1.1,
                    0,
                    getMainTranslateFromScale(1, card1Scale),
                    getMainTranslateFromScale(2, card2Scale),
                    getMainTranslateFromScale(3, card3Scale)
                ],
                extrapolate: 'clamp'
            })
        }, {
            [secondaryTranslateProp]: animatedValue.interpolate({
                inputRange: [0, 1, 2, 3],
                outputRange: [
                    0,
                    getSecondaryTranslateFromScale(1, card1Scale),
                    getSecondaryTranslateFromScale(2, card2Scale),
                    getSecondaryTranslateFromScale(3, card3Scale)
                ],
                extrapolate: 'clamp'
            })
        }]
    };
}
