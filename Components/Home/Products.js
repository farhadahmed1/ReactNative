import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'

export default function Products({ product }) {
    const { title, price, id, image } = product;


    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.body}>
                <Image
                    style={styles.img}
                    source={{ uri: image }}
                    resizeMode='contain'

                />
                <Text> {id}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}> Price:{price}</Text>

            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {

        borderRadius: 12,
        marginBottom: 8,
        padding: 15,
        borderWidth: 1,
        borderColor: "#ccc",



    },

    body: {
        color: "#a9a9a9",
        margin: 4,
        height: '100%',
        width: 6,
        backgroundColor: '#52057b',
        borderRadius: 8




    },
    img: {
        width: '100%',
        height: 200

    },
    title: {
        fontSize: 16,
        marginTop: 4,
        fontWeight: 'bold'

    },
    price: {
        marginTop: 4
    }


});