import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { colors } from '../globals/style'



const OfferSlider = () => {
    return (
        <View style={{padding: 5}}>
            <View style={styles.offerSlider}>
                <Swiper autoplay={true} autoplayTimeout={5} showsButtons={false}
                    dotColor={colors.text2} activeDotColor={colors.text1}
                    // style={{height: 210}}
                    // nextButton={<Text style={styles.buttonText}>{'>'}</Text>}
                    // prevButton={<Text style={styles.buttonText}>{'<'}</Text>}
                >
                    <View style={styles.slide}>
                        <Image source={require('../assets/OfferSliderImages/mega_sale.jpg')} style={styles.image} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../assets/OfferSliderImages/black_friday_sale.jpg')} style={styles.image} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../assets/OfferSliderImages/random_sale.jpg')} style={styles.image} />
                    </View>
                </Swiper>
            </View>
        </View>
    )
}

export default OfferSlider

const styles = StyleSheet.create({
    offerSlider: {
        width: '100%',
        height: 200,
        // backgroundColor: colors.col1,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    slide: {
        width: '100%',
        height: 200,
        // backgroundColor: colors.col1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    buttonText: {
        color: colors.text1,
        fontSize: 20,
        fontWeight: '500',
        backgroundColor: 'white',
        borderRadius: 20,
        width: 22,
        height: 30,
        textAlign: 'center',
        lineHeight: 28,
    }
})