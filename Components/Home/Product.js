import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Products from './Products'


export default function Product() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    //console.log(product);

    return (
        <View>
            <Text> porduct:{product.length}</Text>
            {
                product.map(pd => <Products
                    key={pd.id}

                    product={pd}></Products>)
            }
        </View>
    )
}



