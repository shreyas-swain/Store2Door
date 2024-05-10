import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../globals/style'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from '@rneui/base';

const Categories = () => {

    return (
        <View className="flex-row justify-center">
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity style={styles.box}>
                    {/* <MaterialCommunityIcons name="tshirt-crew" size={24} color="black" style={styles.myicon} /> */}
                    <Image source={require('../assets/CategoryImages/laundry.png')} style={{width: 75, height: 75, borderRadius: 50, marginBottom: 4}} />
                    <Text style={styles.mytext}>Garments</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    {/* <MaterialIcons name="cart" size={24} color="black" style={styles.myicon} /> */}
                    <Image source={require('../assets/CategoryImages/food-delivery.png')} style={{width: 75, height: 75, borderRadius: 50, marginBottom: 4}} />
                    <Text style={styles.mytext}>Groceries</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    {/* <MaterialCommunityIcons name="laptop" size={24} color="black" style={styles.myicon} /> */}
                    <Image source={require('../assets/CategoryImages/kitchen-appliance.png')} style={{width: 75, height: 75, borderRadius: 50, marginBottom: 4}} />
                    <Text style={styles.mytext}>Electronics</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    {/* <MaterialCommunityIcons name="laptop" size={24} color="black" style={styles.myicon} /> */}
                    <Image source={require('../assets/CategoryImages/garment.png')} style={{width: 75, height: 75, borderRadius: 50, marginBottom: 4}} />
                    <Text style={styles.mytext}>Others</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
    
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.col1,
        width: '95%',
        elevation: 10,
        borderRadius: 10,
        padding: 10,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box: {
        backgroundColor: colors.col1,
        // elevation: 20,
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '22%'
    },
    myicon: {
        marginRight: 10,
        color: colors.text3,
    },
    mytext: {
        color: colors.text3,
        fontSize: 12,
        fontWeight: 'bold'
    }
})