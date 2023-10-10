import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../slider/SliderEntry.style';
import { ImageView } from '../../config/appConstants';
import commonStyle from '../../styles/commonStyle';
export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        click: PropTypes.object,
    };

    get image() {
        const { data: { image } } = this.props;

        return <Image
            source={image}
            style={styles.image}
        />

    }

    get shadowImage() {
        return <Image
            source={ImageView.waitShadow}
            style={styles.image}
        />
    }

    render() {
        const { data, onPress } = this.props;
        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={1}
                style={styles.slideInnerContainer}>
                <View style={styles.imageContainer}>
                    {this.image}
                    {this.shadowImage}
                    <View style={styles.radiusMask} />
                    <View style={styles.innerView}>
                        <Text style={styles.country}>{data.country}</Text>
                        <View style={commonStyle.flexRow}>
                            <Text style={styles.place}>{data.place}</Text>
                        </View>
                        <Text style={styles.price}>{data.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}