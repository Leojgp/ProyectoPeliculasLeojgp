import { ScrollView, StyleSheet, View, Image } from 'react-native';
import React, { useRef } from 'react';
import { Movie } from '../config/entities/Movie';

interface Movies {
    movies: Movie[] | undefined;
    height: number;
    backgroundColor: string;
    onEndReached: () => void;
}

export default function Slider({ movies, height, backgroundColor, onEndReached }: Movies) {
    const scrollViewRef = useRef<ScrollView>(null); 

    const handleScroll = (event: any) => {
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isEndReached = contentOffset.x >= contentSize.width - layoutMeasurement.width - 20; 

        if (isEndReached) {
            onEndReached(); 
        }
    };

    return (
        <View style={[{ backgroundColor: backgroundColor, height: height }]}>
            <ScrollView
                ref={scrollViewRef} 
                style={styles.contenedor}
                horizontal={true}
                onScroll={handleScroll} 
                scrollEventThrottle={16}
            >
                {movies?.map((item) => (
                    <Image
                        style={styles.imagen}
                        key={item.id}
                        source={{
                            uri: `https://image.tmdb.org/t/p/original${item.poster}`,
                        }}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        height: 300,
    },
    imagen: {
        width: 200,
        margin: 1,
    },
});