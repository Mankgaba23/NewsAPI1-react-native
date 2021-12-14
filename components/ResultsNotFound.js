import React from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet ,Image, Dimensions} from 'react-native';


const ResultsNotFound = () => {

    return (
        <View style={styles.container}>
            <Text style={{fontSize:25,color:'black'}}>Results Not Found</Text>                  
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
        
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:'center',
        with:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    img:{
        height:'50%',
        width:'100%'
    }
});
export default ResultsNotFound
