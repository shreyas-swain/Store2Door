import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, veg, nonveg } from '../globals/style'

const Cardslider = ({ data, navigation }) => {
    const openBusiness = (item) => {
        navigation.navigate('Business', item)
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.cardsout}
                showsVerticalScrollIndicator={false}
                vertical
                data={data}
                renderItem={({ item }) => (
                    <View
                        >
                        <View style={styles.card}>
                            <View style={styles.s1}>
                                <Image source={ require('../assets/shop.jpeg')
                                    // uri: 'https://www.google.com/imgres?q=shop%20image&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542715473-63675d7974bd%3Fq%3D80%26w%3D1000%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hbGwlMjBzaG9wfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsmall-shop&docid=IFhC3-7Pdcv4gM&tbnid=lhUmBSRggBkVaM&vet=12ahUKEwjSqbPxgYOGAxXX7TgGHQ6rCu4QM3oECC0QAA..i&w=1000&h=667&hcb=2&ved=2ahUKEwjSqbPxgYOGAxXX7TgGHQ6rCu4QM3oECC0QAA'
                                } style={styles.cardimgin} />
                            </View>
                            <View style={styles.s2}>
                                <Text style={styles.txt1}>{item.shopName}</Text>
                                <View style={styles.s2in}>
                                    {/* <Text style={styles.txt2}>Rs.{item.foodPrice}/-</Text> */}
                                    {item.storeType == 'mall' ? <Text>Mall</Text> : <Text>Shop</Text>}
                                </View>
                                <Text style={styles.txt1}>{item.shopAddr}</Text>
                            </View>
                            <TouchableOpacity style={styles.s3} onPress={() => { openBusiness(item) }}>
                                <Text style={styles.buybtn}>
                                    Shop
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default Cardslider

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    cardouthead: {
        color: colors.text3,
        width: '90%',
        fontSize: 30,
        fontWeight: '200',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    cardsout: {
        width: '100%',
    },
    card: {
        width: '95%',
        height: 300,
        margin: '2.5%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        backgroundColor: colors.col1,
    },
    cardimgin: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    s2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txt1: {
        fontSize: 18,
        color: colors.text3,
        marginHorizontal: 5,
        width: 150,
    },
    txt2: {
        fontSize: 20,
        color: colors.text2,
        marginRight: 10,
    },
    s2in: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,

    },
    s3: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 1,
        width: '100%',
    },
    buybtn: {
        backgroundColor: colors.text1,
        color: colors.col1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        borderRadius: 10,
        width: '90%',
        textAlign: 'center',
        margin: '2%',
    }
})