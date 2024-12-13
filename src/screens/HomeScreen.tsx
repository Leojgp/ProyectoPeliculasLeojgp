import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';

export default function HomeScreen() {
    const { nowPlaying, loading, setPage } = useMovies();

    const loadMoreMovies = () => {
        if (nowPlaying && !loading) { 
            // Incremento la página en 1
            setPage((prevPage) => prevPage + 1); 
        }
    };

    return (
        <View>
            <Text>HomeScreen</Text>
            <Slider
                movies={nowPlaying?.movies}
                height={300}
                backgroundColor="green"
                // Paso la función para cargar más películas que he definido arriba
                onEndReached={loadMoreMovies} 
            />
        </View>
    );
}

const styles = StyleSheet.create({});