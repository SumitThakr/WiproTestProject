import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../constants';
export interface IProps {

}
export const Loading: React.SFC<IProps> = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={Colors.white} size='large' />
            <Text style={styles.title}>{"Please Wait...!"}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    title: {
        color: Colors.white,
        marginTop: 10,
        fontFamily: Fonts.RobotoMedium
    }
})
