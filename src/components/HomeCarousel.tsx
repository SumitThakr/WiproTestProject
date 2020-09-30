import React from 'react';
import { Image, Dimensions, View, Text, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel';
const screenWidth = Math.round(Dimensions.get('window').width);
import { Colors, Fonts, Urls } from '../constants/index';

export interface Props {
    data?: [],
    imageNumber?: number
}

export const HomeCarousel: React.SFC<Props> = (props) => {
    const [state, setState] = React.useState({
        active_index: 0
    })
    const _renderItem = (item: { item: { author: string, author_url: string, filename: string, format: string, height: number, id: number, post_url: string, width: number } }) => {
        return (
            <>
                <Text
                    accessible={true}
                    accessibilityLabel={item.item.author+item.item.id}
                    testID={item.item.author+item.item.id}
                    numberOfLines={1} style={styles.title}>{item.item.author}</Text>
                <Image
                    source={{ uri: Urls.BaseUrl + '/200/300?image=' + item?.item?.id }}
                    style={styles.image} />
            </>
        );
    }
    return (
        <View style={styles.container}>
            <Carousel
                data={props.data}
                renderItem={(item: any) => _renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={300}
                indicatorStyle="black"
                autoplay
                loop
                autoplayDelay={2000}
                onSnapToItem={(position) => setState({ active_index: position })}
                autoplayInterval={3000}
                showsHorizontalScrollIndicator={false}
                hasParallaxImages
                layout={'default'}                
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        //flex:1,
        marginTop: 20
    },
    image: {
        height: 200, width: 300,
        borderRadius: 15
    },
    title: {
        color: Colors.black,
        fontSize: 16,
        fontFamily: Fonts.RobotoBold,
        textAlign: 'center',
        marginBottom: 5,
    }
})